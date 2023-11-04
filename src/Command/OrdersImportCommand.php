<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use App\Service\CsvReaderService;
use App\Entity\Customer;
use App\Entity\Order;
use Doctrine\ORM\EntityManagerInterface;
use DateTime;


#[AsCommand(
    name: 'ugo:orders:import',
    description: 'Add a short description for your command',
)]
class OrdersImportCommand extends Command
{
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        parent::__construct();
    }

    protected function configure(): void
    {
        
    }

    protected function execute(InputInterface $input, OutputInterface $output,): int
    {
        $csvReaderService = new CsvReaderService(
            __DIR__ . '/../../csv/customers.csv',
            __DIR__ . '/../../csv/purchases.csv'
        );
        $io = new SymfonyStyle($input, $output);
        $csvData = $csvReaderService->readCsv();

        $customerResults = $csvData[0];
        $orderResults = $csvData[1];

        foreach ($customerResults as $customerResult) {
            $customer = $this->entityManager->getRepository(Customer::class)->find($customerResult["id"]);
            if (!$customer) {
                $customer = new Customer();
                $io->success(isset($customerResult["firstname"]) ? $customerResult["firstname"] : 'null');
                $customer->setFirstname(isset($customerResult["firstname"]) ? $customerResult["firstname"] : null);
                $customer->setTitle(isset($customerResult["title"]) ? $customerResult["title"] : null);
                $customer->setLastname(isset($customerResult["lastname"]) ? $customerResult["lastname"] : null);
                $customer->setEmail(isset($customerResult["email"]) ? $customerResult["email"] : null);
                $customer->setCity(isset($customerResult["city"]) ? $customerResult["city"] : null);
                $customer->setPostalCode(isset($customerResult["postal_code"]) ? intval($customerResult["postal_code"]) : null);
                $this->entityManager->persist($customer);
                $this->entityManager->flush();
            }
            
        }

        foreach ($orderResults as $orderResult) {
            $order = $this->entityManager->getRepository(Order::class)->findOneBy(["purchase_identifier" => $orderResult["purchase_identifier"]]);
            if (!$order) {
                $order = new order();
                $io->success($orderResult["date"]);
                $order->setPurchaseIdentifier(isset($orderResult["purchase_identifier"]) ? $orderResult["purchase_identifier"] : null);
                $order->setCustomer($this->entityManager->getRepository(Customer::class)->find($orderResult["customer_id"]));
                $order->setProductId(isset($orderResult["product_id"]) ? intval($orderResult["product_id"]) : null);
                $order->setQuantity(isset($orderResult["quantity"]) ? intval($orderResult["quantity"]) : null);
                $order->setPrice(isset($orderResult["price"]) ? floatval($orderResult["price"]) : null);
                $order->setDate(isset($orderResult["date"]) ? new DateTime($orderResult["date"]) : null);
                $order->setCurrency(isset($orderResult["currency"]) ? $orderResult["currency"] : null);
                $this->entityManager->persist($order);
                $this->entityManager->flush();
            }
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
}

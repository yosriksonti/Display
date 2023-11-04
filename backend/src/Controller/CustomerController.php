<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Customer;

class CustomerController extends AbstractController
{
    #[Route('/customer', name: 'app_customer', methods: ['GET'])]
    public function index(EntityManagerInterface $entityManager): JsonResponse
    {
        $customers = $entityManager->getRepository(Customer::class)->findAll();
        $customerArray = [];
        foreach ($customers as $customer) {
            $customerArray[] = [
                'id' => $customer->getId(),
                'title' => $customer->getTitle(),
                'firstname' => $customer->getFirstname(),
                'lastname' => $customer->getLastname(),
                'postal_code' => $customer->getPostalCode(),
                'city' => $customer->getCity(),
                'email' => $customer->getEmail(),
            ];
        }
        return $this->json($customerArray);
    }
    #[Route('/customer/{customer_id}/orders', name: 'app_customer_orders', methods: ['GET'])]
    public function orders($customer_id, EntityManagerInterface $entityManager): JsonResponse
    {
        $customer = $entityManager->getRepository(Customer::class)->find($customer_id);
        $ordersArray = [];
        foreach ($customer->getOrders() as $order) {
            $ordersArray[] = [
                'purchase_identifier' => $order->getPurchaseIdentifier(),
                'last_name' => $order->getCustomer()->getLastname(),
                'date' => $order->getDate()->format('Y-m-d'),
                'product_id' => $order->getProductId(),
                'quantity' => $order->getQuantity(),
                'price' => $order->getPrice(),
            ];
        }
        return $this->json($ordersArray);
    }
}

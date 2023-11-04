<?php
namespace App\Service;

use League\Csv\Reader;
use DateTime;

class CsvReaderService
{
    private $customersCsv;
    private $ordersCsv;

    public function __construct(string $customersCsv, string $ordersCsv)
    {
        $this->customersCsv = $customersCsv;
        $this->ordersCsv = $ordersCsv;
    }

    public function readCsv()
    {
        $customerReader = Reader::createFromPath($this->customersCsv, 'r');
        $orderReader = Reader::createFromPath($this->ordersCsv, 'r');

        $customerReader->setHeaderOffset(0); // Assumes the first row contains headers
        $orderReader->setHeaderOffset(0); // Assumes the first row contains headers


        $records = $customerReader->getRecords(); // Get an iterator of records

        $customerResults = [];
        
        foreach ($records as $record) {
            $values = explode(";",array_values($record)[0]);
            $customerResult = [];

            $customerResult['id'] = isset($values[0]) ? $values[0] : null;
            $customerResult['title'] = isset($values[1])
                ? $values[1] == 1 
                    ? "mme"
                    : "mr" 
                : null;
            $customerResult['firstname'] = isset($values[2]) ? $values[2] : null;
            $customerResult['lastname'] = isset($values[3]) ? $values[3] : null;
            $customerResult['postal_code'] = isset($values[4]) ? intval($values[4]) : null;
            $customerResult['city'] = isset($values[5]) ? $values[5] : null;
            $customerResult['email'] = isset($values[6]) ? $values[6] : null;
            $customerResults[] = $customerResult;

        }


        $records = $orderReader->getRecords(); // Get an iterator of records

        $orderResults = [];

        foreach ($records as $record) {
            $values = explode(";",array_values($record)[0]);
            $orderResult = [];

            $orderResult['purchase_identifier'] = isset($values[0]) ? $values[0] : null;
            $orderResult['customer_id'] = isset($values[1]) ? intval($values[1]) : null;
            $orderResult['product_id'] = isset($values[2]) ? intval($values[2]) : null;
            $orderResult['quantity'] = isset($values[3]) ? intval($values[3]) : null;
            $orderResult['price'] = isset($values[4]) ? intval($values[4]) : null;
            $orderResult['currency'] = isset($values[5]) ? $values[5] : null;
            $orderResult['date'] = isset($values[6]) ? $values[6] : null;

            $orderResults[] = $orderResult;
            // $orderResults[] = explode(";",array_values($record)[0]);
        }
        


        return [$customerResults,$orderResults];
    }
}

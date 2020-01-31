<?php

namespace App\Tests;

use App\Entity\Customer;
use PHPUnit\Framework\TestCase;

class customerTest extends TestCase
{
    private $customer;

    public function setUp()
    {
        $this->customer = new customer();
    }

    public function testCustomerUsername()
    {
        $this->customer->setUsername('FREE');
        $this->assertEquals('FREE', $this->customer->getUsername());
    }

    public function testCustomerPassword()
    {
        $this->customer->setPassword('pass');
        $this->assertEquals('pass', $this->customer->getPassword());
    }

    public function testCustomerEmail()
    {
        $this->customer->setEmail('dev@gmail.com');
        $this->assertEquals('dev@gmail.com', $this->customer->getEmail());
    }
}
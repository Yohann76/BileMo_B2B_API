<?php

namespace App\Tests\Api;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use App\Entity\Customer;
use App\Entity\Phone;
use App\Entity\User;

class ApiTest extends ApiTestCase
{
    private $phone;
    private $customer;
    private $user;

    public function setUp()
    {
        $this->phone = new Phone();
        $this->user = new User();
        $this->customer = new Customer();
    }

    // fonctionne pas
    public function testGetPhones()
    {
        $customer = self::createClient();
        $customer->request('GET', '/api/phones');
        $this->assertResponseStatusCodeSame(200);
    }


    public function testGetSinglePhone()
    {
        // Todo : Create phone
        $customer = self::createClient();
        $customer->request('GET', '/api/phones/234');
        $this->assertResponseStatusCodeSame(200);
    }

    public function testGetUsers()
    {
        $customer = self::createClient();
        $customer->request('GET', '/api/users');
        $this->assertResponseStatusCodeSame(200);
    }

    public function testGetSingleUser()
    {
        // Todo : Create users
        $customer = self::createClient();
        $customer->request('GET', '/api/users/12');
        $this->assertResponseStatusCodeSame(200);
    }
}

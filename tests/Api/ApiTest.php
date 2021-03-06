<?php

namespace App\Tests\Api;

use App\Tests\BaseApiTest;
use App\Entity\Customer;
use App\Entity\Phone;
use App\Entity\User;

class ApiTest extends BaseApiTest
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
    public function testRegisterIsSuccessfull()
    {
        $this->register('new'.uniqid().'register','dev','register'.uniqid().'@gmail.com');
        $this->assertResponseStatusCodeSame(201);
    }

    public function testLoginIsSuccessfull()
    {
        $this->login('yohann','dev');
        $this->assertResponseStatusCodeSame(200);
    }

    public function testGetPhones()
    {
        $customer = self::createClient();
        $customer->request('GET', '/api/phones');
        $this->assertResponseStatusCodeSame(200);
    }

    public function testGetSinglePhone()
    {
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
        $customer = self::createClient();
        $customer->request('GET', '/api/users/12');
        $this->assertResponseStatusCodeSame(200);
    }
}

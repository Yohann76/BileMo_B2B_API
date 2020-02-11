<?php

namespace App\Tests;

use App\Entity\Phone;
use PHPUnit\Framework\TestCase;

class phoneTest extends TestCase
{
    private $phone;

    public function setUp()
    {
        $this->phone = new Phone();
    }

    public function testPhoneId()
    {
        $this->phone->setPrice('1');
        $this->assertEquals('1', $this->phone->getPrice());
    }

    public function testPhoneName()
    {
        $this->phone->setName('Iphone');
        $this->assertEquals('Iphone', $this->phone->getName());
    }

    public function testPhonePrice()
    {
        $this->phone->setPrice('700');
        $this->assertEquals('700', $this->phone->getPrice());
    }

    public function testPhoneColor()
    {
        $this->phone->setColor('black');
        $this->assertEquals('black', $this->phone->getColor());
    }

    public function tesPhoneDescription()
    {
        $this->phone->setDescription('good smartphone');
        $this->assertEquals('good smartphone', $this->phone->getDescription());
    }
}
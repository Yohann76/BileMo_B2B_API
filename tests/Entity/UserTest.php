<?php

namespace App\Tests;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class userTest extends TestCase
{
    private $user;

    public function setUp()
    {
        $this->user = new User();
    }

    public function testUserFistName()
    {
        $this->user->setFirstName('Alex');
        $this->assertEquals('Alex', $this->user->getFirstName());
    }

    public function testUserEmail()
    {
        $this->user->setEmail('dev@gmail.com');
        $this->assertEquals('dev@gmail.com', $this->user->getEmail());
    }

    public function testUserMobile()
    {
        $this->user->setMobile('0646596495');
        $this->assertEquals('0646596495', $this->user->getMobile());
    }
}
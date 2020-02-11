<?php

namespace App\Tests;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;



class BaseApiTest extends ApiTestCase
{
    public function testGetApiPage()
    {
        $client = static::createClient();
        $client->request('GET','/api');

        $this->assertResponseIsSuccessful();
    }

    public function login($username,$password)
    {
        $response = static::createClient();
        $response->request('POST','/api/login_check',['json' => [
            'username' => $username,
            'password' => $password,
            ]]);
    }

    public function register($username,$password,$email)
    {
        $response = static::createClient();
        $response->request('POST','/api/register',['json' => [
            'username' => $username,
            'password' => $password,
            'email' => $email,
        ]]);
    }
}

<?php

namespace App\Tests\Controller;


use App\Tests\BaseWebTest;

class homeControllerTest extends BaseWebTest
{
    public function testHome()
    {
        $client = $this->login('yohann','dev') ;
        $client->request('GET', '/');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    public function testDocs()
    {
        $client = $this->login('yohann','dev') ;
        $client->request('GET', '/api?ui=re_doc');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    public function testPostLogin() {
        $client = $this->login('yohann','dev') ;
        $client->request('POST', '/login');
        $this->assertResponseStatusCodeSame(302);
    }
}
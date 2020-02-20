<?php

namespace App\DataFixtures;

use App\Entity\Phone;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class PhoneFixtures extends BaseFixture
{
    private $names = ['iPhone', 'Samsung'];
    private $colors = ['black', 'white'];

    public function loadData(ObjectManager $manager)
    {
        for($i = 1; $i <= 20; $i++) {
            $phone = new Phone();
            $phone->setName($this->names[rand(0, 1)] . ' ' . rand(5, 8));
            $phone->setColor($this->colors[rand(0, 1)]);
            $phone->setPrice(rand(500, 1000));
            $phone->setDescription('number this phone : '.rand(10, 50) );

            $manager->persist($phone);
        }
        $manager->flush();
    }
}

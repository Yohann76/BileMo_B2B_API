<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CustomerFixtures extends Fixture
{
    public const FREE = 'free';
    public const SFR = 'sfr';

    protected $faker;

    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $this->faker = Factory::create();

        // create FREE
        $free = new Customer();
        $free->setEmail('yohanndurand'.rand(0,50).'@gmail.com')
            ->setUsername('SFR')
            ->setPassword($this->passwordEncoder->encodePassword($free,'dev'))
            ->setRoles(['ROLE_USER']);
        $this->addReference('FREE',$free);
        $manager->persist($free);

        // create SFR
        $sfr = new Customer();
        $sfr->setEmail('yohanndurand'.rand(0,50).'@gmail.com')
            ->setUsername('FREE')
            ->setPassword($this->passwordEncoder->encodePassword($sfr,'dev'))
            ->setRoles(['ROLE_USER']);
        $this->addReference('SFR',$sfr);
        $manager->persist($sfr);

        // Create one admin
        $customerAdmin = new Customer();
        $customerAdmin->setEmail('yohanndurand76@gmail.com')
            ->setUsername('Yohann')
            ->setPassword($this->passwordEncoder->encodePassword($customerAdmin,'dev'))
            ->setRoles(['ROLE_ADMIN']);
        $manager->persist($customerAdmin);


        $manager->flush();

    }
}
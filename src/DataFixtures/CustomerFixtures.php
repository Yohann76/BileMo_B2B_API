<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use App\Entity\User;
use App\DataFixtures\UserFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CustomerFixtures extends BaseFixture implements DependentFixtureInterface
{
    public const FREE = 'free';
    public const SFR = 'sfr';
    public const YOHANN = 'YOHANN';

    protected $faker;

    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function loadData(ObjectManager $manager)
    {
        $this->faker = Factory::create();

        // create FREE
        $free = new Customer();
        $free->setEmail('yohanndurand'.rand(0,50).'@gmail.com')
            ->setUsername('FREE')
            ->setPassword($this->passwordEncoder->encodePassword($free,'dev'))
            ->setRoles(['ROLE_USER']);
        $this->addReference('FREE',$free);
        $manager->persist($free);

        dump($this->getReference('FREE'));

        /*

        // create SFR
        $sfr = new Customer();
        $sfr->setEmail('yohanndurand'.rand(0,50).'@gmail.com')
            ->setUsername('SFR')
            ->setPassword($this->passwordEncoder->encodePassword($sfr,'dev'))
            ->setRoles(['ROLE_USER']);
        $this->addReference('SFR',$sfr);
        $manager->persist($sfr);

        // Create one admin ( Yohann )
        $yohann = new Customer();
        $yohann->setEmail('yohanndurand76@gmail.com')
            ->setUsername('Yohann')
            ->setPassword($this->passwordEncoder->encodePassword($yohann,'dev'))
            ->setRoles(['ROLE_ADMIN']);
        $this->addReference('YOHANN',$yohann);
        $manager->persist($yohann);

        */

        $manager->flush();
    }

    // DependentFixtureInterface, Load PhoneFixture before Customer
    public function getDependencies()
    {
        return array(
            PhoneFixtures::class,
            AppFixtures::class
        );
    }


}
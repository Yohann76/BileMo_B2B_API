<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\Security\Core\Security;

class UserFixtures extends BaseFixture implements DependentFixtureInterface
{
    protected $faker;

    // Unique
    private static $firstName = ['George', 'Galla', 'Pedro', 'Saphira', 'pantin', 'Appoline', 'Pompidou', 'Léa','Lucie','Charlie'];

    private $passwordEncoder;
    private $security;


    public function __construct(UserPasswordEncoderInterface $passwordEncoder,Security $security)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->security = $security;
    }

    public function loadData(ObjectManager $manager)
    {
        $this->faker = Factory::create();

        // for 4 users for FREE
        for($i = 1; $i <= 5; $i++) {
            $user = new User();
            $user->setEmail('users'.rand(0,50).'@gmail.com')
                ->setFirstName($this->faker->randomElement(self::$firstName).$i )
                ->setMobile(rand(0,50))
                ->setCustomer($this->getReference('FREE'));
            $manager->persist($user);
        }


        // for 4 users for SFR
        for($i = 1; $i <= 5; $i++) {
            $user = new User();
            $user->setEmail('users'.rand(0,50).'@gmail.com')
                ->setFirstName($this->faker->randomElement(self::$firstName).$i )
                ->setMobile(rand(0,50))
                ->setCustomer($this->getReference('SFR'));
            $manager->persist($user);
        }

        // for 2 users for Yohann
        for($i = 1; $i <= 2; $i++) {
            $user = new User();
            $user->setEmail('admin'.rand(0,50).'@gmail.com')
                ->setFirstName($this->faker->randomElement(self::$firstName).$i )
                ->setMobile(rand(0,50))
                ->setCustomer($this->getReference('YOHANN'));
            $manager->persist($user);
        }


        $manager->flush();
    }

    // DependentFixtureInterface, Load CustomerFixture before user
    public function getDependencies()
    {
        return array(
            CustomerFixtures::class,
        );
    }

}
<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator;

class UserFixtures extends Fixture
{
    protected $faker;

    // Unique
    private static $firstName = ['George', 'Galla', 'Pedro', 'Saphira', 'pantin', 'Appoline', 'Pompidou', 'Léa','Lucie','Charlie'];

    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $this->faker = Factory::create();

        // for 5 users
        for($i = 1; $i <= 5; $i++) {
            $user = new User();
            $user->setEmail('users'.rand(0,50).'@gmail.com')
                ->setFirstName($this->faker->randomElement(self::$firstName).$i )
                ->setMobile(rand(0,50))
                ->setCustomer($this->getReference('FREE'));
            $manager->persist($user);
        }

        // for 5 users
        for($i = 1; $i <= 5; $i++) {
            $user = new User();
            $user->setEmail('users'.rand(0,50).'@gmail.com')
                ->setFirstName($this->faker->randomElement(self::$firstName).$i )
                ->setMobile(rand(0,50))
                ->setCustomer($this->getReference('SFR'));
            $manager->persist($user);
        }
        $manager->flush();
    }

}
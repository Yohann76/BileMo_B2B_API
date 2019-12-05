<?php
// src/Command/CreateUserCommand.php
namespace App\Command;

use App\Entity\Customer;
use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface as EntityManagerInterfaceAlias;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AddCustomerCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:create:customer';
    protected $userManager;
    private $passwordEncoder;
    public function __construct(EntityManagerInterface $userManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        parent::__construct();
        $this->userManager = $userManager;
        $this->passwordEncoder = $passwordEncoder;
    }
    protected function configure()
    {
        $this
            ->setDescription('Create a customer with user_role')
            ->setHelp('use with : php bin/console app:create:user Yohann 000000')
            // configure an argument
            ->addArgument('username', InputArgument::REQUIRED, 'Enter Username')
            ->addArgument('password', InputArgument::REQUIRED, 'Enter Password')
        ;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln([
            'Customer Creator',
            '============',
            '',
        ]);
        // retrieve the argument value using getArgument()
        $customer = new Customer();
        $customer->setUsername($input->getArgument('username'));
        $customer->setPassword($this->passwordEncoder->encodePassword($customer, $input->getArgument('password')));
        $customer->setRoles(["ROLE_USER"]);
        $this->userManager->persist($customer);
        $this->userManager->flush();

        $output->writeln(' username:'.$input->getArgument('username'));
        $output->writeln(' password:'.$this->passwordEncoder->encodePassword($customer, $input->getArgument('password')));
        $output->writeln(' Role: ROLE_USER');
    }
}
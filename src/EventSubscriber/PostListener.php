<?php

namespace App\EventSubscriber;

use App\Doctrine\searchUserLinkedToCustomer;
use App\Entity\Customer;
use App\Entity\User;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Events;
use Symfony\Component\Security\Core\Security;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;


class PostListener implements EventSubscriber
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
            Events::postRemove,
            Events::postUpdate,
            Events::prePersist,
        ];
    }
    // return customer connect in persist user
    public function prePersist(User $user)
    {
        if ($user->getCustomer()) {
            return;
        }

        if ($this->security->getUser() ) {
            $user->setCustomer($this->security->getUser());
        }

        // problem with DataFixture
        //$customer = $this->security->getUser();
        //$user->setCustomer($customer);
    }
}
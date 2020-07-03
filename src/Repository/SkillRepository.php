<?php
declare(strict_types=1);

namespace App\Repository;

use App\Entity\Skill;
use Doctrine\ORM\EntityRepository;

/**
 * Class SkillRepository
 * @package App\Repository
 *
 * @
 */
class SkillRepository extends EntityRepository
{
    /**
     * @return Skill[]
     */
    public function fetchAll(): array
    {
        $qb = $this->createQueryBuilder('skill');

        return $qb->getQuery()
            ->getResult();
    }
}
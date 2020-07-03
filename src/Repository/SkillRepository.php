<?php
declare(strict_types=1);

namespace App\Repository;

use App\Entity\Skill;
use Doctrine\ORM\EntityRepository;

/**
 * Class SkillRepository
 * @package App\Repository
 *
 * @method Skill|null find($id, $lockMode = null, $lockVersion = null)()
 * @method Skill|null findOneBy(array $criteria, array $orderBy = null)
 * @method Skill[] findAll()
 * @method Skill[] findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
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
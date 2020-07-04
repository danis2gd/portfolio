<?php
declare(strict_types=1);

namespace App\Repository;

use App\Entity\Card;
use Doctrine\ORM\EntityRepository;

/**
 * Class SkillRepository
 * @package App\Repository
 *
 * @method Card|null find($id, $lockMode = null, $lockVersion = null)()
 * @method Card|null findOneBy(array $criteria, array $orderBy = null)
 * @method Card[] findAll()
 * @method Card[] findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CardRepository extends EntityRepository
{
    /**
     * @return Card[]
     */
    public function fetchSkills(): array
    {
        $qb = $this->createQueryBuilder('card');
        $eb = $qb->expr();

        return $qb
            ->from(Card::class, 'class')
            ->where($eb->eq('class.cardType', ':cardType'))
            ->setParameters([
                'cardType' => Card::SKILL
            ])
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Card[]
     */
    public function fetchWorks(): array
    {
        $qb = $this->createQueryBuilder('card');
        $eb = $qb->expr();

        return $qb
            ->from(Card::class, 'class')
            ->where($eb->eq('class.cardType', ':cardType'))
            ->setParameters([
                'cardType' => Card::WORK
            ])
            ->getQuery()
            ->getResult();
    }
}
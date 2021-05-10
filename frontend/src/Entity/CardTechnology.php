<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Classes\AnnotationGroups;

/**
 * Class CardTechnology
 * @package App\Entity
 *
 * @ORM\Entity(repositoryClass="Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository")
 * @ORM\Table(name="tblCardTechnology")
 */
class CardTechnology
{
    /**
     * @var int|null
     *
     * @ORM\Id
     * @ORM\Column(name="intCardTechnologyId", type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @var Card
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Card", inversedBy="technologies")
     * @ORM\JoinColumn(name="intCardId", referencedColumnName="intCardId")
     */
    private $card;

    /**
     * @var Technology
     *
     * @ORM\OneToOne(targetEntity="App\Entity\Technology")
     * @ORM\JoinColumn(name="intTechnologyId", referencedColumnName="intTechnologyId")
     *
     * @Groups({AnnotationGroups::WORK_DATA})
     */
    private $technology;

    /**
     * @var int
     *
     * @ORM\Column(name="intDisplayOrder", type="integer")
     *
     * @Groups({AnnotationGroups::WORK_DATA})
     */
    private $displayOrder;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Card
     */
    public function getCard(): Card
    {
        return $this->card;
    }

    /**
     * @return Technology
     */
    public function getTechnology(): Technology
    {
        return $this->technology;
    }

    /**
     * @return int
     */
    public function getDisplayOrder(): int
    {
        return $this->displayOrder;
    }
}
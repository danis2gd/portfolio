<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Classes\AnnotationGroups;

/**
 * Class Technology
 * @package App\Entity
 *
 * @ORM\Entity(repositoryClass="Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository")
 * @ORM\Table(name="tblTechnology")
 *
 * @UniqueEntity(fields={"handle"})
 */
class Technology
{
    private const SYMFONY = 'SYMFONY';
    private const MYSQL = 'MYSQL';
    private const PHP7 = 'PHP7';

    /**
     * @var int|null
     *
     * @ORM\Id
     * @ORM\Column(name="intTechnologyId", type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="strName", type="string")
     *
     * @Groups({AnnotationGroups::WORK_DATA})
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="strHandle", type="string")
     *
     * @Groups({AnnotationGroups::WORK_DATA})
     */
    private $handle;

    /**
     * Technology constructor.
     *
     * @param string $name
     * @param string|null $handle
     */
    private function __construct(string $name, ?string $handle)
    {
        $this->name = $name;
        $this->handle = $handle;
    }

    /**
     * @param string $name
     * @param string $handle
     *
     * @return Technology
     */
    public function create(string $name, string $handle): Technology
    {
        return new self(
            $name,
            $handle
        );
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getHandle(): string
    {
        return $this->handle;
    }
}
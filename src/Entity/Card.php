<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Classes\AnnotationGroups;

/**
 * Class Card
 * @package App\Entity
 *
 * @ORM\Entity(repositoryClass="App\Repository\CardRepository")
 * @ORM\Table(name="tblCard")
 */
class Card
{
    public const SKILL = 'SKILL';
    public const WORK = 'WORK';

    /**
     * @var int|null
     *
     * @ORM\Id
     * @ORM\Column(name="intCardId", type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="strCardType", type="string")
     *
     * @Groups({AnnotationGroups::SKILLS_DATA, AnnotationGroups::WORK_DATA})
     */
    private $cardType;

    /**
     * @var string
     *
     * @ORM\Column(name="strTitle", type="string")
     *
     * @Groups({AnnotationGroups::SKILLS_DATA, AnnotationGroups::WORK_DATA})
     */
    private $title;

    /**
     * @var string|null
     *
     * @ORM\Column(name="strSubTitle", type="string", nullable=true)
     *
     * @Groups({AnnotationGroups::WORK_DATA})
     */
    private $subTitle;

    /**
     * @var string|null
     *
     * @ORM\Column(name="strImagePath", type="string", nullable=true)
     *
     * @Groups({AnnotationGroups::WORK_DATA})
     */
    private $imagePath;

    /**
     * @var string
     *
     * @ORM\Column(name="strDescription", type="string")
     *
     * @Groups({AnnotationGroups::SKILLS_DATA, AnnotationGroups::WORK_DATA})
     */
    private $description;

    /**
     * @var CardTechnology[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="App\Entity\CardTechnology", mappedBy="card")
     * @ORM\JoinColumn(columnDefinition="intCardId", referencedColumnName="intCardId")
     *
     * @Groups({AnnotationGroups::WORK_DATA})
     */
    private $technologies;

    /**
     * Card constructor.
     *
     * @param string $cardType
     * @param string $title
     * @param string|null $subTitle
     * @param string|null $imagePath
     * @param string $description
     */
    private function __construct(string $cardType, string $title, ?string $subTitle, ?string $imagePath, string $description)
    {
        $this->cardType = $cardType;
        $this->title = $title;
        $this->subTitle = $subTitle;
        $this->imagePath = $imagePath;
        $this->description = $description;
        $this->technologies = new ArrayCollection();
    }

    /**
     * @param string $cardType
     * @param string $title
     * @param string|null $subTitle
     * @param string|null $imagePath
     * @param string $description
     *
     * @return Card
     */
    public function create(string $cardType, string $title, ?string $subTitle, ?string $imagePath, string $description): Card
    {
        return new self(
            $cardType,
            $title,
            $subTitle,
            $imagePath,
            $description
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
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @return string
     */
    public function getCardType(): string
    {
        return $this->cardType;
    }

    /**
     * @return string
     */
    public function getSubTitle(): ?string
    {
        return $this->subTitle;
    }

    /**
     * @return string
     */
    public function getImagePath(): ?string
    {
        return $this->imagePath;
    }

    /**
     * @return CardTechnology[]|ArrayCollection
     */
    public function getTechnologies()
    {
        return $this->technologies;
    }
}
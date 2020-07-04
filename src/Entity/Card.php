<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Classes\AnnotationGroups;

/**
 * Class Skill
 * @package App\Entity
 *
 * @ORM\Entity(repositoryClass="App\Repository\CardRepository")
 * @ORM\Table(name="tblSkill")
 */
class Card
{
    public const SKILL = 'SKILL';
    public const WORK = 'WORK';

    /**
     * @var int|null
     *
     * @ORM\Id
     * @ORM\Column(name="intSkillId", type="integer")
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
}
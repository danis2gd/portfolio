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
 * @ORM\Entity(repositoryClass="App\Repository\SkillRepository")
 * @ORM\Table(name="tblSkill")
 */
class Skill
{
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
     * @ORM\Column(name="strTitle", type="string")
     *
     * @Groups({AnnotationGroups::SKILLS})
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="strDescription", type="string")
     *
     * @Groups({AnnotationGroups::SKILLS})
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
}
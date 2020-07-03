<?php
declare(strict_types=1);

namespace App\Controller\Api;

use App\Classes\AnnotationGroups;
use App\Entity\Skill;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerAwareTrait;

/**
 * Class MockDataController
 * @package App\Controller\Api
 *
 * @Route(path="/api", name="api_")
 */
class ApiController extends AbstractController
{
    use SerializerAwareTrait;

    /**
     * @Route(path="/skills", name="skills")
     *
     * @return Response
     */
    public function skillsData(): Response
    {
        $skills = $this->getDoctrine()
            ->getRepository(Skill::class)
            ->fetchAll();

        return new Response(
            $this->serializer->serialize(
                $skills,
                'json',
                ['groups' => AnnotationGroups::SKILLS]
            )
        );
    }
}
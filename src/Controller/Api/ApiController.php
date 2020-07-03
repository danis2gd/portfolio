<?php
declare(strict_types=1);

namespace App\Controller\Api;

use App\Classes\MockDataEnumeration;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MockDataController
 * @package App\Controller\Api
 *
 * @Route(path="/api", name="api_")
 */
class ApiController
{
    /**
     * @Route(path="/skills", name="skills")
     *
     * @return JsonResponse
     */
    public function skillsData(): JsonResponse
    {
        return new JsonResponse(
            MockDataEnumeration::$skills
        );
    }
}
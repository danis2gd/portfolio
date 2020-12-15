<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Controller extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     */
    public function index(): Response
    {
        return $this->render('portfolio.html.twig');
    }

    /**
     * @Route("/cv", name="app_cv")
     */
    public function cv(): Response
    {
        return $this->render('cv/cv.html.twig');
    }
}
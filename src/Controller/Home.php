<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Home extends AbstractController
{
    /**
     * @Route("/", name="page_index")
     */
    public function index(): Response
    {
        return $this->render('portfolio.html.twig');
    }

    /**
     * @Route("/cv", name="page_cv")
     */
    public function cv(): Response
    {
        return $this->render('cv/cv.html.twig');
    }
}
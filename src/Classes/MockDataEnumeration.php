<?php
declare(strict_types=1);

namespace App\Classes;

class MockDataEnumeration
{
    public static $skills = [
        [
            'title' => 'PHP7',
            'description' => 'I was formally introduced to PHP in 2015, but had previous experience using the language, and have been using it for both professional and personal projects. I started off with processing scripts for orders, email scheduling, product management and moved on to Content Management Systems and then onto frameworks such as Symfony. I have managed entities with Doctrine ORM, created RESTful APIs with FOSRest, managing forms within Symfony Forms, and used many more libraries to build intuitive and sophisticated solutions.'
        ],
        [
            'title' => 'SQL',
            'description' => 'I have been using SQL since working at my IT apprenticeship. I was first introduced to MySQL/MariaDB and PostgreSQL for help storing my data structures for reports, product management (stock) and email subscriber lists. I have used other SQL variants such as MSSQL and Oracle whilst studying. I am proficient in creating my own schemas for complex data systems such as my work recently on an expandable Survey system using Doctrine and relating it to a MySQL 8.0 database.'
        ],
        [
            'title' => 'HTML/CSS',
            'description' => 'HTML/CSS markup have been one of my first skills I learnt around 10 years ago. I am experienced in frontend design for any medium from CMS, dashboards, product pages, and email templates. Recently, I have adapted my skills using CSS into adopting LESS as it allows for much cleaner stylesheets that are much cleaner than vanilla CSS.'
        ],
        [
            'title' => 'JavaScript',
            'description' => 'Originally starting to use JavaScript for simple website modifications for modals and click event handling to much more modern solutions using Webpack. Whilst routing API calls I have used JavaScript to communicate with Symfony APIs to populate dashboard data. Furthermore, I developed a 2D canvas which handled object collisions in vanilla JS - whilst at University. This whole section is a component built with React!'
        ],
        [
            'title' => 'Testing',
            'description' => 'I first started testing at University whilst learning C#. Unit Testing was core to the curriculum and thus good practices have carried over to other such testing in PHP (PHPUnit). I am confident in being able to write testable code which can ensure the robustness of any application. I have experience writing Behat tests to functionally test at my applications. One of the main ways I have applied Behat is through using Mink, Selenium and Chrome headless browsing for automated tests to emulate user behaviour.'
        ],
        [
            'title' => 'AMQP',
            'description' => 'I learnt the fundamentals of AMQP whilst working for Wren Kitchens and using messages for queuing background processes. Worked on processes mainly related to file upload and processing. This was implemented using RabbitMQ broker.\n'
        ],
        [
            'title' => 'AWS',
            'description' => 'I am proficient in using different AWS services when developing for distributed systems. Whether is be S3 for storing images, videos and uploads or CloudWatch for application logs such as AMQP consumer logs.'
        ],
        [
            'title' => 'Elastic',
            'description' => 'I used ElasticSearch in the aforementioned CSV parser to efficiently search through the parsed stock table which was populated through Symfony application using FOSElastica. Anytime a CSV was parsed the Elastic structure was re-populated.'
        ],
    ];
}
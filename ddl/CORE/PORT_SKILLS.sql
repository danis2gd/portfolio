USE Portfolio;

CREATE TABLE tblTechnology
(
    intTechnologyId int(11)     NOT NULL AUTO_INCREMENT,
    strName         varchar(45) NOT NULL,
    strHandle       varchar(45) NOT NULL,
    PRIMARY KEY (intTechnologyId)
) ENGINE = MyISAM
  DEFAULT CHARSET = latin1;

CREATE TABLE tblCardTechnology
(
    intCardTechnologyId int(11) NOT NULL AUTO_INCREMENT,
    intCardId           int(11) NOT NULL,
    intTechnologyId     int(11) NOT NULL,
    intDisplayOrder     int(4) NOT NULL,
    PRIMARY KEY (intCardTechnologyId),
    CONSTRAINT UK_intCardId_intDisplayOrder UNIQUE (intCardId, intDisplayOrder),
    FOREIGN KEY tblCardTechnology_intTechnologyId (intTechnologyId) REFERENCES tblTechnology (intTechnologyId)
) ENGINE = MyISAM
  DEFAULT CHARSET = latin1;

CREATE TABLE tblCard
(
    intCardId      int(11)     NOT NULL AUTO_INCREMENT,
    strTitle       varchar(45) NOT NULL,
    strDescription longtext    NOT NULL,
    strSubTitle    varchar(45) DEFAULT NULL,
    strImagePath   varchar(45) DEFAULT NULL,
    strCardType    varchar(11) NOT NULL,
    PRIMARY KEY (intCardId),
    FOREIGN KEY tblCard_intCardId (intCardId) REFERENCES tblCardTechnology (intCardId)
) ENGINE = MyISAM
  DEFAULT CHARSET = latin1;

START TRANSACTION;

INSERT INTO tblCard
    (strTitle, strDescription, strSubTitle, strImagePath, strCardType)
VALUES
    ('PHP7', '<p>I was formally introduced to PHP in 2015, but had previous experience using the language, and have been using it for both professional and personal projects. I started off with processing scripts for orders, email scheduling, product management and moved on to Content Management Systems and then onto frameworks such as Symfony. I have managed entities with Doctrine ORM, created RESTful APIs with FOSRest, managing forms within Symfony Forms, and used many more libraries to build intuitive and sophisticated solutions.</p>', null, null, 'SKILL'),
    ('SQL', '<p>I have been using SQL since working at my IT apprenticeship. I was first introduced to MySQL/MariaDB and PostgreSQL for help storing my data structures for reports, product management (stock) and email subscriber lists. I have used other SQL variants such as MSSQL and Oracle whilst studying. I am proficient in creating my own schemas for complex data systems such as my work recently on an expandable Survey system using Doctrine and relating it to a MySQL 8.0 database.</p>', null, null, 'SKILL'),
    ('HTML/CSS', '<p>HTML/CSS markup have been one of my first skills I learnt around 10 years ago. I am experienced in frontend design for any medium from CMS, dashboards, product pages, and email templates. Recently, I have adapted my skills using CSS into adopting LESS as it allows for much cleaner stylesheets that are much cleaner than vanilla CSS.</p>', null, null, 'SKILL'),
    ('JavaScript', '<p>Originally starting to use JavaScript for simple website modifications for modals and click event handling and now to much more modern solutions using Webpack. Also routing API calls I have used JavaScript to communicate with Symfony APIs to populate dashboard data. Furthermore, I developed a 2D canvas which handled object collisions in vanilla JS - whilst at University. This whole section is a component built with React!</p>', null, null, 'SKILL'),
    ('Testing', '<p>I first started testing at University whilst learning C#. Unit Testing was core to the curriculum and thus good practices have carried over to other such testing in PHP (PHPUnit). I am confident in being able to write testable code which can ensure the robustness of any application. I have experience writing Behat tests to functionally test at my applications. One of the main ways I have applied Behat is through using Mink, Selenium and Chrome headless browsing for automated tests to emulate user behaviour.</p>', null, null, 'SKILL'),
    ('AMQP', '<p>I learnt the fundamentals of AMQP whilst working for Wren Kitchens and using messages for queuing background processes. Worked on processes mainly related to file upload and processing. This was implemented using RabbitMQ broker.</p>', null, null, 'SKILL'),
    ('AWS', '<p>I am proficient in using different AWS services when developing for distributed systems. Whether is be S3 for storing images, videos and uploads or CloudWatch for application logs such as AMQP consumer logs.</p>', null, null, 'SKILL'),
    ('Elastic', '<p>I used ElasticSearch in the aforementioned CSV parser to efficiently search through the parsed stock table which was populated through Symfony application using FOSElastica. Anytime a CSV was parsed the Elastic structure was re-populated.</p>', null, null, 'SKILL'),
    ('CSV Parser', '<p>As part of my Graduate training scheme at Wren Kitchens I developed a product descriptions CSV parser which utilised: Symfony (PHP7) for the stack, RabbitMQ for handing off of the parsing process, Elastic for searching through product descriptions, and SQL for the data persistence.</p><p>Also utilised was JavaScript for file upload handling and AJAX hand-off. For styling, CSS/LESS was used to manage stylesheets all through Webpack Encore.</p>', null, 'img/my_work/csv_upload_modified.png', 'WORK'),
    ('Brewery Management System', '<p>As part of my dissertation, whilst studying at the University of Hull, I completed a bespoke business application specifically for breweries. The main idea was to have a wide array of stock management options to enable proactive stocking through an Android application.</p><p>The final project saw a solid Stock Inventory system written in C# driven by a PHP RESTful API built upon a MySQL database. A C# Point of Sale application with order processing was also completed in the same application. Furthermore, an Android application was also initially developed to handle stock scanning/reading and editing on the go.</p>', null, 'img/my_work/siapos.PNG', 'WORK'),
    ('Business Dashboard', '<p>One of my best projects at the Workwear Outlet was a business reporting dashboard for any sort of business data which needed reporting. This could be from order processing statuses, processor health checks, sales reporting, email marketing statistics, etc.</p><p>The dashboard utilised PHP for the executing of database queries and the data was displayed in, mostly, CSS grids or JQuery Flotcharts dependant on the data. This made the dashboard easy display meaningful information to a manager.</p>', '(modash)', 'img/my_work/modash.jpg', 'WORK'),
    ('Events', '<p>A simple way to have your mates pay for a group booking. A side project I started to try out the latest libraries such as TailwindCSS, Symfony Framework 5 and React.</p>', null, 'img/my_work/events.jpg', 'WORK');

COMMIT;

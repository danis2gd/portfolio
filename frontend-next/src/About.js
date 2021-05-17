import { Attributes } from "./Attributes/Attributes";

export const About = () => {
    return (
        <>
            <div className={"about-container initial-container"}>
                <div className={"about-content px-16 pb-8 sm:px-12 sm:pb-14"}>
                    <h2 className="heading">About Me</h2>

                    <p>
                        Developer at Wren Kitchens working with mainly PHP7/Symfony Framework, LESS/CSS, JavaScript,
                        Twig/HTML, MySQL on a variety of internal and external services. Also experienced using Doctrine ORM,
                        PHPUnit, Behat, RabbitMQ, AWS, Docker, and Elasticsearch.
                    </p>

                    <p>
                        I studied at the University of Hull for my BSc Computer Science. Whilst at University I mainly
                        used C# but have developed in PHP, Java, C++, C and JavaScript and studied an array of key concepts such
                        as MVC frameworks, data structures, and algorithms to name a few.
                    </p>

                    <p>
                        Prior to studying I worked for 2 years at an online eCommerce retailer as a Full Stack Developer
                        focusing on PHP eCommerce/management systems, scripts and software environments.
                    </p>

                    <p>Some of my work is featured further down.</p>
                </div>
            </div>

            <Attributes />
        </>
    );
};

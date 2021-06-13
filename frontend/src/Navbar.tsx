import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Props = {
    sticky: boolean;
};

export const Navbar: React.FC<Props> = ({ sticky = false }) => {
    return (
        <nav className={`navbar w-full bg-gray-dark z-overlay min-h-60 ${sticky ? "sticky" : ""}`}>
            <div className={"container flex flex-wrap"}>
                <div className={"flex-none sm:mb-0 sm:mr-3"}>
                    <a className={"link--primary link--no-hover flex flex-row fill-current justify-center"} href={"#"}>
                        <span className={"font-semibold text-xl tracking-tight"}>
                            Daniel Chadwick
                        </span>
                    </a>
                </div>

                <div className={"flex flex-1 sm:justify-start"}>
                    <a href={"#"} className={"link--primary inline-block mx-2 text-center"}>
                        Home
                    </a>

                    {/*<a href={"#"} className={"link--primary inline-block mx-2 text-center"}>*/}
                    {/*    CV*/}
                    {/*</a>*/}
                </div>

                <div className={"social-bar"}>
                    <FontAwesomeIcon className={"social-icon"} icon={faGithub} />
                    <FontAwesomeIcon className={"social-icon"} icon={faLinkedin} />
                    <img className={"social-icon"} src={"img/social_cv.png"}  alt="CV"/>
                </div>
            </div>
        </nav>
    );
};

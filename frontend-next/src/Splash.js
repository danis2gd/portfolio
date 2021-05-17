import Typed from "react-typed";

export const Splash = () => {
    return (
        <div className={"bg"}>
            {/*
             <!-- splash page
                 Image belongs to Andi Campbell Jones
                 desc: Humber Sunset – A scenic view up the Humber estuary and on to the iconic Humber bridge.
                 Taken from the foreshore I loved the way the light of the sunset was reflecting off the pebbles giving
                 an extra dynamic to this picture.

                 src: http://andicampbelljones.com/sunsets-sunrises-best-of/
             -->
            */}

            <div className={"caption"}>
                <h1 className={"name"}>
                    Daniel Chadwick
                </h1>

                <Typed
                    className={"title"}
                    strings={["Developer"]}
                    typeSpeed={101}
                    backSpeed={0}
                    loop={false}
                />

                <div className={"social-links"}>
                    <div className={"link-container"}>
                        <a className={"fade-links show"}
                           href={"https://www.linkedin.com/in/danieljchadwick/"}
                           target={"_blank"}
                        >
                            <img src="img/social_linkedin.png" />
                        </a>

                        <a className={"fade-links show"} href={"https://github.com/danis2gd"} target={"_blank"}>
                            <img src="img/social_github.png" />
                        </a>
                        <a className={"fade-links show"} href={"#"}>
                            <img src="img/social_cv.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
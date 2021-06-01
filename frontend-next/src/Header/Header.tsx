import { useRef, useState } from "react";
import handleViewport from "react-in-viewport";
import { Splash } from "../Splash";
import { Navbar } from "../Navbar";
import { useElementOnScreen } from "../util/useElementOnScreen";

export const Header: React.FC = () => {
    const [containerRef, isVisible] = useElementOnScreen();
    const [inView, setInView] = useState<boolean>(false);

    console.log(isVisible);

    return (
        <>
            <Splash ref={containerRef} />

            <Navbar sticky={!isVisible} />
        </>
    );
};

const ViewportBlock = handleViewport(Splash);
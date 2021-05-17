import { ReactSVG } from "react-svg";
import ReactTooltip from "react-tooltip";

export const CardTechnology = ({ technology }) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div className="w-8 mx-1">
            <ReactSVG
                data-tip
                data-for={`technologyTip-${technology.handle}`}
                data-event={isMobile ? "touchstart" : "click mousestart mouseover"}
                data-event-off="mouseout"
                src={`img/svg/${technology.handle}.svg`}
            />

            <ReactTooltip
                id={`technologyTip-${technology.handle}`}
                effect="solid"
                globalEventOff={isMobile ? "touchstart" : undefined}
            >
                {technology.name}
            </ReactTooltip>
        </div>
    );
};

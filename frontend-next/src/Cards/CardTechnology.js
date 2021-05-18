import { ReactSVG } from "react-svg";
import ReactTooltip from "react-tooltip";

export const CardTechnology = ({ technology }) => {
    return (
        <div className={"svg-item"}>
            <ReactSVG
                src={`img/svg/${technology}.svg`}
                className={""}
                data-tip
                data-for={`technologyTip-${technology}`}
                data-event={"click mousestart mouseover"}
                data-event-off="mouseout"
            />

            <ReactTooltip
                id={`technologyTip-${technology}`}
                effect="solid"
            >
                {technology}
            </ReactTooltip>
        </div>
    );
};

import { CardImage } from "./CardImage";

export const CardHeader = ({ imagePath }) => {
    return (
        <div className={"grid-image-top"}>
            <CardImage imagePath={imagePath} />
        </div>
    );
};

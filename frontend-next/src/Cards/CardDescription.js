import ReactHtmlParser from "react-html-parser";

export const CardDescription = ({ description }) => {
    return (
        <div>
            {ReactHtmlParser(description)}
        </div>
    );
};

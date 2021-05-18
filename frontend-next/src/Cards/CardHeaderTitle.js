export const CardHeaderTitle = ({ title, subTitle }) => {
    return (
        <div className={"title-wrapper"}>
            <span className={"item-title"}>{title} <small>{subTitle}</small></span>
        </div>
    );
};

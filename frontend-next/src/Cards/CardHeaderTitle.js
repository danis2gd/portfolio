export const CardHeaderTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center mb-1">
            <span className="item-title transform">{title} <small>{subTitle}</small></span>
        </div>
    );
};

import { CardHeader } from "./CardHeader";
import { CardTechnologies } from "./CardTechnologies";
import { CardHeaderTitle } from "./CardHeaderTitle";
import { CardContent } from "./CardContent";
import { CardDescription } from "./CardDescription";

export const Card = ({ imagePath, title, subTitle, description, technologies }) => {
    return (
        <div className="grid-item">
            <div className="grid-item-wrapper">
                <CardHeader
                    imagePath={imagePath}
                    title={title}
                    subTitle={subTitle}
                />

                <div className="grid-item-content">
                    {null !== technologies ?
                        <CardTechnologies
                            technologies={technologies}
                        />
                    : ""}


                    <CardHeaderTitle
                        title={title}
                        subTitle={subTitle}
                    />

                    <CardDescription description={description} />
                </div>
            </div>
        </div>
    );
};

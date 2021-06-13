import { Card } from "./Cards/Card";
import { gql, useQuery } from "@apollo/client";

const work = gql`
    query Work {
        cards(cardType: "WORK") {
            _id,
            cardType
            title,
            description,
            displayOrder,
            subTitle,
            imagePath,
            technologies
        }
    }
`;

export const Works: React.FC = () => {
    const { loading, error, data } = useQuery(work);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className={"grid-row info-row"}>
            {data.cards.map((work) => {
                const { _id, imagePath, title, subTitle, description, technologies } = work;

                return (
                    <Card
                        key={_id}
                        imagePath={imagePath}
                        title={title}
                        subTitle={subTitle}
                        description={description}
                        technologies={technologies}
                    />
                );
            })}
        </div>
    );
};

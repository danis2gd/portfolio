import { CardTechnology } from "./CardTechnology";

export const CardTechnologies = ({ technologies }) => {
    return (
        <div className={"svg-wrapper"}>
            {technologies.map((technology, key) => {
                return (
                    <CardTechnology
                        key={key}
                        technology={technology}
                    />
                );
            })}
        </div>
    );
};

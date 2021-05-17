import { CardTechnology } from "./CardTechnology";

export const CardTechnologies = ({ technologies }) => {
    return (
        <div className="flex justify-center mb-3">
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

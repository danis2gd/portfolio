import { BaseEntity, Entity, Enum, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { CardType } from "../enum/CardType";
import { Technology } from "../enum/Technology";

@Entity()
@Unique({ properties: ["cardType", "displayOrder"] })
export class Card extends BaseEntity<Card, "_id"> {
    @PrimaryKey({
        fieldName: "id",
    })
    _id!: number;

    @Enum(() => CardType)
    cardType!: CardType;

    @Property()
    title!: string;

    @Property()
    description!: string;

    @Property()
    displayOrder!: number;

    @Property({
        nullable: true,
    })
    subTitle?: string;

    @Property({
        nullable: true,
    })
    imagePath?: string;

    @Enum({ items: () => Technology, array: true, default: [] })
    technologies: Technology[];
}

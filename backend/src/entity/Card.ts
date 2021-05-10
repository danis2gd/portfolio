import { BaseEntity, Entity, Enum, PrimaryKey, Property } from "@mikro-orm/core";
import { CardType } from "../enum/CardType";
import { Technology } from "../enum/Technology";

@Entity()
export class Card extends BaseEntity<Card, "_id"> {
    @PrimaryKey()
    _id!: number;

    @Enum(() => CardType)
    cardType!: CardType;

    @Property()
    title!: string;

    @Property()
    subTitle!: string;

    @Property()
    imagePath!: string;

    @Property()
    description!: string;

    @Enum({ items: () => Technology, array: true, default: [] })
    technologies: Technology[];
}

import { Injectable } from "@nestjs/common";
import { EntityRepository } from "@mikro-orm/core";
import { Card } from "../entity/Card";
import { CardType } from "../enum/CardType";
import { InjectRepository } from "@mikro-orm/nestjs";

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(Card)
        private readonly cardRepository: EntityRepository<Card>
    ) {}

    getSkills(): Promise<Card[]> {
        return this.cardRepository.find({
            cardType: CardType.SKILL
        });
    }

    getWork(): Promise<Card[]> {
        return this.cardRepository.find({
            cardType: CardType.WORK
        });
    }
}

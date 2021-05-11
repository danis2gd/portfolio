import { Controller, Get } from "@nestjs/common";
import { CardService } from "../service/Card.service";
import { Card } from "../entity/Card/Card";

@Controller("/card")
export class CardController {
    constructor(
        private readonly cardService: CardService
    ) {}

    @Get("/skills")
    getSkills(): Promise<Card[]> {
        return this.cardService.getSkills();
    }

    @Get("/work")
    getWork(): Promise<Card[]> {
        return this.cardService.getWork();
    }
}

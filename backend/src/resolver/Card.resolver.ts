import { Args, Int, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Card } from "../entity/Card/Card";
import { CardService } from "../service/Card.service";

@Resolver(of => Card)
export class CardResolver {
    constructor(
        private cardService: CardService,
    ) {}

    @Query(returns => Card)
    async card(@Args('id', { type: () => Int }) id: number): Promise<Card> {
        return this.cardService.getOneById(id);
    }

    @Query(returns => [Card])
    async cards(): Promise<Card[]>
    {
        return this.cardService.getAll();
    }
}

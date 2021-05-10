import { Module } from "@nestjs/common";
import { CardController } from "../controller/Card.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { CardService } from "../service/Card.service";
import { Card } from "../entity/Card";

@Module({
    imports: [
        MikroOrmModule.forFeature([Card])
    ],
    controllers: [
        CardController,
    ],
    providers: [
        CardService,
    ],
})
export class CardModule {}

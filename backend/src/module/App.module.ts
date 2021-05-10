import { Module } from "@nestjs/common";
import { CardController } from "../controller/Card.controller";
import { CardModule } from "../module/Card.module";
import { MikroOrmModule } from "@mikro-orm/nestjs";

@Module({
    imports: [
        MikroOrmModule.forRoot(),
        CardModule,
    ],
})
export class AppModule {}

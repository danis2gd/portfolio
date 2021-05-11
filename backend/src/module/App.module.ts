import { Module } from "@nestjs/common";
import { CardModule } from "./Card.module";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { GraphQLModule } from "@nestjs/graphql";
import { GqlConfigService } from "../service/GqlConfig.service";

@Module({
    imports: [
        MikroOrmModule.forRoot(),
        GraphQLModule.forRootAsync({
            useClass: GqlConfigService,
        }),
        CardModule,
    ],
})
export class AppModule {}

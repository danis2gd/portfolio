import { NestFactory } from "@nestjs/core";
import { AppModule } from "./module/App.module";

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);

    await app.listen(4000);
};

bootstrap();

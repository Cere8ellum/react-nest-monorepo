import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Declared globally so as not to be imported in all modules where it is used
      envFilePath: `env/.${process.env.NODE_ENV}.env`, // Path to .env
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

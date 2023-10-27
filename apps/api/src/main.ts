import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.API_PORT || 3005;
  const endpoint = process.env.API_ENDPOINT || "api";
  const BASE_API_URL = makeUrl(
    process.env.API_SERVER,
    process.env.API_PORT,
    process.env.API_ENDPOINT
  );
  const BASE_WEB_URL = makeUrl(
    process.env.WEB_SERVER,
    process.env.WEB_PORT,
    process.env.WEB_ENDPOINT
  );

  // Enable Cors
  app.enableCors({
    origin: [BASE_API_URL, BASE_WEB_URL],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
  app.setGlobalPrefix(endpoint);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const docConfig = new DocumentBuilder()
    .setTitle("Api")
    .setDescription("API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup(endpoint, app, document);

  // Port
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${endpoint}`
  );

  // HMR
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => void app.close());
  }
}
void bootstrap();

/**
 * Returns URL string
 * @param host
 * @param port
 * @param endpoint
 * @returns {string} URL
 */
function makeUrl(host: any, port: any, endpoint: any): string {
  return `${host}${port ? ":" + port : ""}${endpoint ? "/" + endpoint : ""}`;
}

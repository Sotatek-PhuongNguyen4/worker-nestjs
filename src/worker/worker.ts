import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WorkerModule } from 'src/worker/worker.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(WorkerModule);
  await app.listen("4001");
  console.debug(`Worker is running on ${await app.getUrl()}`);
}
bootstrap();
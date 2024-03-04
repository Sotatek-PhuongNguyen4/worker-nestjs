import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { AudioModule } from 'src/audio/audio.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'my-queue',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AudioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

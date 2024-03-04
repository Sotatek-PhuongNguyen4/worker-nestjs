import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'my-queue',
    }),
  ],
  controllers: [AudioController],
})
export class AudioModule {}
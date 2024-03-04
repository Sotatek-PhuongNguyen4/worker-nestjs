import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('my-queue') private readonly audioQueue: Queue) {}

  @Post('transcode')
  async transcode() {
    this.audioQueue.add("process-image", {
      file: 'audio.mp3',
    });
  }
}
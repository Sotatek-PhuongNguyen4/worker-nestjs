import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { WorkerProcessor } from 'src/worker/worker.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'my-queue',
    }),
  ],
  providers: [WorkerProcessor],
})
export class WorkerModule {}
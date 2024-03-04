import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('my-queue')
export class WorkerProcessor {
  private readonly logger = new Logger(WorkerProcessor.name);

  @Process('process-image')
  handleTranscode(job: Job) {
    console.log("processImage 1233")
  }

}
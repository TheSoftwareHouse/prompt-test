import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class LogService extends ConsoleLogger {
  log(...args: any[]): void {
    console.log(...args);
  }
}

import { Global, Module } from '@nestjs/common';
import { ConfigService } from './shared/config/config.service';
import { LogService } from './shared/log/log.service';

@Global()
@Module({
  providers: [LogService, ConfigService],
  exports: [LogService, ConfigService],
})
export class GlobalModule {}

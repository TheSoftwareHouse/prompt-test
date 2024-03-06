import { Module } from '@nestjs/common';
import { GlobalModule } from './global.module';
import { CreateModule } from './commands/create/create.module';
import { TestModule } from './commands/test/test.module';

@Module({
  imports: [GlobalModule, CreateModule, TestModule],
})
export class AppModule {}

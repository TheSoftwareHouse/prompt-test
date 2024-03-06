import { Module } from '@nestjs/common';
import { TestCommand } from './test.command';
import { TestService } from './test.service';
import { ModelFactory } from '../../shared/model/model.factory';

@Module({
  providers: [TestCommand, TestService, ModelFactory],
})
export class TestModule {}

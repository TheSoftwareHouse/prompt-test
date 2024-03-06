#!/usr/bin/env node --no-warnings
import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

const bootstrap = async () => {
  await CommandFactory.run(AppModule, ['warn', 'error']);
};

bootstrap();

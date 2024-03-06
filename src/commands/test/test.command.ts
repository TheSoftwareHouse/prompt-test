import { Command, CommandRunner } from 'nest-commander';
import { TestService } from './test.service';

@Command({ name: 'test', description: 'Test file' })
export class TestCommand extends CommandRunner {
  constructor(private readonly testService: TestService) {
    super();
  }

  async run(inputs: string[]): Promise<void> {
    const fileName = inputs[0];
    if (!fileName) {
      throw new Error('Missing file name');
    }

    await this.testService.run(fileName);
  }
}

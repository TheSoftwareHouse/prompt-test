import { Command, CommandRunner, Option } from 'nest-commander';
import { LogService } from '../../shared/log/log.service';
import { CreateOptions } from './create.interface';
import { CreateService } from './create.service';

@Command({ name: 'create', description: 'Create file' })
export class CreateCommand extends CommandRunner {
  constructor(
    private readonly logService: LogService,
    private createService: CreateService,
  ) {
    super();
  }

  async run(inputs: string[], options: CreateOptions): Promise<void> {
    const fileName = inputs[0];
    if (!fileName) {
      throw new Error('Missing file name');
    }
    this.logService.log({ inputs, options });
    await this.createService.create(fileName, options);
  }

  @Option({
    flags: '-m --model [name]',
    defaultValue: 'openai',
    choices: ['openai', 'bedrock', 'api'],
  })
  parseModel(model: string) {
    return model;
  }
}

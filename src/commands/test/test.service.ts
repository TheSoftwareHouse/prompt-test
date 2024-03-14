import * as assert from 'node:assert';
import { describe, it } from 'node:test';
import { ConfigService } from '../../shared/config/config.service';
import { ModelFactory } from '../../shared/model/model.factory';
import { Model } from '../../shared/model/models.interface';
import { Config } from '../../shared/config/config.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  constructor(
    private readonly configService: ConfigService,
    private readonly modelFactory: ModelFactory,
  ) {}

  async run(filename: string) {
    const modelConfig = await this.configService.read(filename);
    const model = this.modelFactory.createModel(modelConfig.model);

    this.test(modelConfig, model);
  }

  private test(config: Config, model: Model) {
    config.testGroups.forEach((group) => {
      describe(group.name, { skip: group.skip }, async () => {
        group.testCases.forEach((testCase) => {
          it(
            `Test: ${testCase.input}`,
            {
              concurrency: true,
              skip: testCase.skip,
            },
            async () => {
              const preparedPrompt = config.preparePrompt(
                config.prompt,
                testCase.input,
              );
              const result = await model.call(preparedPrompt);
              const parsedResult = config.parseResult(result);
              assert.strictEqual(parsedResult, testCase.result);
            },
          );
        });
      });
    });
  }
}

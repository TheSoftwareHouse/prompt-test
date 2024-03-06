import { Model } from '../models.interface';
import { Bedrock } from '@langchain/community/llms/bedrock';
import { BedrockModelConfig } from './bedrock.interface';

export class BedrockModel implements Model {
  private model: Bedrock;

  constructor(config: BedrockModelConfig) {
    this.model = new Bedrock(config);
  }

  async call(input: string): Promise<string> {
    return this.model.invoke(input);
  }
}

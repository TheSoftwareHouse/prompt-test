import { Model } from '../models.interface';
import { OpenAI } from '@langchain/openai';
import { OpenAIModelConfig } from './openai.interface';

export class OpenAIModel implements Model {
  private model: OpenAI;

  constructor(config: OpenAIModelConfig) {
    this.model = new OpenAI(config);
  }

  async call(input: string): Promise<string> {
    return this.model.invoke(input);
  }
}

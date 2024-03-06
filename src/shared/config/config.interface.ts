import { ModelConfig } from '../model/models.interface';

export interface Config {
  model: ModelConfig;
  testGroups: {
    name: string;
    testCases: {
      input: string;
      result: string;
    }[];
  }[];
  preparePrompt: (prompt: string, input: string) => string;
  parseResult: (result: unknown) => string;
  prompt: string;
}

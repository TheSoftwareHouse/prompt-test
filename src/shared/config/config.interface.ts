import { ModelConfig } from '../model/models.interface';

export interface Config {
  model: ModelConfig;
  testGroups: {
    name: string;
    skip: boolean;
    testCases: {
      input: string;
      result: string;
      skip: boolean;
    }[];
  }[];
  preparePrompt: (prompt: string, input: string) => string;
  parseResult: (result: unknown) => string;
  prompt: string;
}

import { ApiModelConfig } from './api/api.interface';
import { OpenAIModelConfig } from './openai/openai.interface';
import { BedrockModelConfig } from './bedrock/bedrock.interface';

export type ModelConfig =
  | { type: 'api'; config: ApiModelConfig }
  | { type: 'openai'; config: OpenAIModelConfig }
  | { type: 'bedrock'; config: BedrockModelConfig };

export type SupportedModels = ModelConfig['type'];
export interface Model {
  call: (value: unknown) => unknown;
}

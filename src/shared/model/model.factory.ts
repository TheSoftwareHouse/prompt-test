import { Injectable } from '@nestjs/common';
import { Model, ModelConfig } from './models.interface';
import { ApiModel } from './api/api.model';
import { OpenAIModel } from './openai/openai.model';
import { BedrockModel } from './bedrock/bedrock.model';

@Injectable()
export class ModelFactory {
  createModel(config: ModelConfig): Model {
    switch (config.type) {
      case 'openai':
        return new OpenAIModel(config.config);
      case 'bedrock':
        return new BedrockModel(config.config);
      case 'api':
        return new ApiModel(config.config);
    }
  }
}

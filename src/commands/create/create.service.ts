import { Injectable } from '@nestjs/common';
import { apiConfig, bedorckConfig, openAIConfig } from './create.config';
import { CreateOptions } from './create.interface';
import { ConfigService } from '../../shared/config/config.service';

@Injectable()
export class CreateService {
  constructor(private readonly configService: ConfigService) {}

  private getConfigBasedOnModel(model: CreateOptions['model']) {
    switch (model) {
      case 'bedrock':
        return bedorckConfig;
      case 'openai':
        return openAIConfig;
      case 'api':
        return apiConfig;
    }
  }

  async create(file: string, options: CreateOptions) {
    const model = this.getConfigBasedOnModel(options.model);

    const content = `
const config = {
${model.trim()}
}

module.exports = config;
    `.trim();

    await this.configService.save(file, content);
  }
}

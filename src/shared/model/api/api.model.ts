import { Model } from '../models.interface';
import { ApiModelConfig } from './api.interface';
import axios from 'axios';
export class ApiModel implements Model {
  private url: string;
  private options: Record<string, unknown>;

  constructor(config: ApiModelConfig) {
    const { url, ...rest } = config;

    this.url = url;
    this.options = rest;
  }

  async call(input: Record<string, any>) {
    const body = {
      ...this.options,
      ...input,
    };
    const response = await axios({
      url: this.url,
      method: 'post',
      data: body,
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
  }
}

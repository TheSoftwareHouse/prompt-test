import { resolve } from 'path';
import { writeFile } from 'node:fs/promises';
import { Config } from './config.interface';

export class ConfigService {
  async read(file: string): Promise<Config> {
    const path = resolve('./', `./${file}`);
    const config = await import(path);

    return config;
  }

  private getUnifiedFileName(filename: string) {
    if (filename.includes('.')) {
      return `${filename.split('.')[0]}.js`;
    }

    return `${filename}.js`;
  }

  async save(file: string, content: string) {
    await writeFile(this.getUnifiedFileName(file), content);
  }
}

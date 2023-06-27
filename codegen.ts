import type { CodegenConfig } from '@graphql-codegen/cli';
import botConfig from './src/config';

const config: CodegenConfig = {
  overwrite: true,
  schema: botConfig.pocket.api,
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript','typescript-operations'],
    },
  },
};

export default config;

import { CodegenConfig } from '@graphql-codegen/cli';
import { api_url } from './src/constants/utils';

const config: CodegenConfig = {
  schema: api_url,
  watch: true, // Specify the protocol (http or https)
  documents: ['src/**/*.ts', '!src/gql/**/*'], // Update documents path according to your project structure
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;

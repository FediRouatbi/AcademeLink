import { CodegenConfig } from '@graphql-codegen/cli';
import { api_url } from './src/constants/utils';
console.log(api_url);

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:3000/graphql',
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

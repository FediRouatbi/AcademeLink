import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://127.0.0.1:3000/graphql", // Specify the protocol (http or https)
  documents: ["app/**/*.tsx", "!app/gql/**/*"], // Update documents path according to your project structure
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

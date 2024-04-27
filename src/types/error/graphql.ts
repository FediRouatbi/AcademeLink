type GraphlQLError = {
  errors: {
    message: string;
    locations: {
      line: number;
      column: number;
    }[];
    path: string[];
    extensions: {
      code: string;
      stacktrace: string[];
      status: number;
      originalError: {
        message: string;
        error: string;
        statusCode: number;
      };
    };
  }[];
  data: null;
};

import { RoleCodeEnum, Token } from './../../gql/graphql';
import NextAuth, { type User } from 'next-auth';
type RoleCodeType = 'ADMIN' | 'STUDENT' | 'TEACHER';
declare module 'next-auth' {
  interface User {
    user: {
      user_id: string;
      createdAt: number;
      description: string;
      image_url: string;
      first_name: string;
      last_name: string;
      updatedAt: string;
      role: RoleCodeType;
      user_name: string;
    };

    token: {
      accessToken: string;
      refreshToken: string;
    };
  }
  interface Session {
    user: {
      user_id: string;
      createdAt: number;
      description: string;
      image_url: string;
      first_name: string;
      last_name: string;
      updatedAt: string;
      role: RoleCodeType;
      user_name: string;
    };

    token: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      user_id: string;
      createdAt: number;
      description: string;
      image_url: string;
      first_name: string;
      last_name: string;
      updatedAt: string;
      role: RoleCodeType;
      user_name: string;
    };

    token: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

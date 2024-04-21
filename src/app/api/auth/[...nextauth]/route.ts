import { api_url } from "@/constants/utils";
import { NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// async function refreshToken(token: JWT): Promise<JWT> {
//   const res = await fetch(api_url + "/auth/refresh", {
//     method: "POST",
//     headers: {
//       authorization: `Refresh ${token.backendTokens.refreshToken}`,
//     },
//   });
//   console.log("refreshed");

//   const response = await res.json();

//   return {
//     ...token,
//     backendTokens: response,
//   };
// }

const mutation = `
    mutation Login($data: LoginInput!) {
      login(data: $data) {
        accessToken
        refreshToken
      }
    }
  `;
const query = `
    query getCurrentUser {
    getCurrentUser {
      createdAt
      first_name
      last_name
      updatedAt
      role
      user_id
      user_name
    }
  }
  `;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const res = await fetch(api_url, {
          method: "POST",
          body: JSON.stringify({
            query: mutation,
            variables: {
              data: {
                email: email,
                password: password,
              },
            },
          }),
          headers: {
            "Content-Type": "application/json",
            credentials: "include",
          },
        });
        const tokens = await res.json();

        if (res.status == 401) {
          return null;
        }

        const userRes = await fetch(api_url, {
          method: "POST",
          body: JSON.stringify({
            query: query,
          }),
          headers: {
            Authorization: `Bearer ${tokens.data.login.accessToken}`,
            "Content-Type": "application/json",
            credentials: "include",
          },
        });
        const userdata = await userRes.json();
        if (userRes.status == 401) {
          return null;
        }

        const user = {
          token: tokens.data.login,
          user: userdata.data?.getCurrentUser,
        } as User;

        return user;
      },
    }),
  ],

  callbacks: {
  
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      token.exp = 3713613588620;
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      session.token = token.token;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

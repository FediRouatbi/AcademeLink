import NextAuth from "next-auth/next";
import { authOptions } from "./auth";

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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

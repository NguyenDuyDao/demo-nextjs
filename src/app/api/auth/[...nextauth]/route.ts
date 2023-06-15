import AxiosClient from "@/src/client/AxiosClient";
import NextAuth, { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const authOptions: AuthOptions = {
    secret: process.env.NextAuth_SECRET,
    // Configure one or more authentication providers
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_CLIENT_ID as string,
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
            accessTokenUrl: process.env.KEYCLOAK_ACCESS_TOKEN_URL as string,
            issuer: process.env.KEYCLOAK_ISSUER as string,
            authorization: {
                url: process.env.KEYCLOAK_AUTH_URL,
                params: {
                    scope: "openid offline_access",
                },
            },
        }),
    ],
    callbacks: {
        async session({ session, token, user }: any) {
            session.genericToken = token.genericToken;
            session.refreshToken = token.refreshToken;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            // if (account) {
            //     token.refreshToken = account.refresh_token;
            //     const res = await AxiosClient.postRequest(
            //         "/generic-tokens",
            //         { token: account.refresh_token },
            //         {
            //             headers: {
            //                 "Content-Type": "application/x-www-form-urlencoded",
            //             },
            //         }
            //     );
            //     const { token: genericToken } = res.data;
            //     token.genericToken = genericToken;
            // }
            // console.log(localStorage);
            return token;
        },
    },
    pages: {
        signIn: "/tenant",
    },
};
// clientId: "process.env.KEYCLOAK_ID",
// clientSecret: "process.env.KEYCLOAK_SECRET",
// issuer: process.env.KEYCLOAK_ISSUER,

// export default NextAuth(authOptions);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }

import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { User } from "@/modules/user";
import connectDb from "@/lib/db/db";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECERT || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "your email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials, req) {
        try {
          await connectDb;
          // const user = { id: "32", name: "sdf", password: "dsf", role: "sdf" };
          if (!credentials?.email || !credentials?.password) {
            throw Error("credential are not provided");
          }
          const user = await User.findOne({ email: credentials.email });
          // checking user exist or not
          if (!user) throw Error("user dosnt exixts.");

          // comparing password
          const isPasswordCorrect = await user.comparePassword(
            credentials.password
          );
          if (!isPasswordCorrect) throw Error("invalid cradentials");

          return user;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // token.id = user.id;
        token.role = user.roles;
      }
      return token;
    },
  },
  session: {
    maxAge: 60 * 60 * 24,
  },
};

import NextAuth, { DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    roles: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}

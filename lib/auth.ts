import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github"
import { db } from "@/lib/db"

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            profile(profile, tokens) {
                const { id, name, email, picture } = profile
                // console.log("#######Report of Profile#######")
                // console.log(JSON.stringify(profile))
                return {
                    id,
                    name,
                    email,
                    picture
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true
        },
        async redirect({ url, baseUrl }) {
          return baseUrl
        },
        async session({ session, user, token }) {
            console.log("### => session")
            
          return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log("$$$ => jwt")
          return token
        }
      },
      pages: {
        signIn: "/login"
      }
}

export const useServerSession = async (authOption: NextAuthOptions) => getServerSession(authOptions)
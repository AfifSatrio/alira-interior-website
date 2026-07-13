import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const whitelist = [
  "upgriddigitalofc@gmail.com",
  "alirainterior07@gmail.com"
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email && whitelist.includes(user.email)) {
        return true
      } else {
        return false // Return false to display a default error message
      }
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  }
})

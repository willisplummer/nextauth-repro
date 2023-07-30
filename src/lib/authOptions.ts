import { AuthOptions } from "next-auth"
import Credentials from 'next-auth/providers/credentials'

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: 'Sign in',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('authorizing')
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        if (process.env.AUTH_USERNAME === credentials.username && process.env.AUTH_PASSWORD === credentials.password) {
          console.log('authorized')
          return {
            id: 'id',
            username: credentials.username,
            randomKey: "Hey cool",
          };
        }

        // Return null if user data could not be retrieved
        console.log('not authorized')
        return null
      }
    })
  ]
}

export default authOptions

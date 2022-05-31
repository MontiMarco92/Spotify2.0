import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { LOGIN_URL } from '../../../lib/spotify'
import spotifyApi from '../../../lib/spotify'
import { JWT } from 'next-auth/jwt'

const refreshAccessToken = async (token: JWT) => {
  try {
    spotifyApi.setAccessToken(token.accessToken)
  } catch (err) {
    console.log(err)
    return {
      ...token,
      error: 'refreshTokenError',
    }
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      //initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at,
        }
      }

      //retunr previous token if the access token is not expired
      if (Date.now() < token.accessTokenExpires) {
        console.log('existing token is valid')
        return token
      }

      //access token is expired so refresh it
    },
  },
})

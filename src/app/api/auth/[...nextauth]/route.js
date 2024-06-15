import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'

const handler = NextAuth({
	// Configure one or more authentication providers
	providers: [
		RedditProvider({
			clientId: process.env.REDDIT_CLIENT_ID,
			clientSecret: process.env.REDDIT_CLIENT_SECRET,
		}),
		// TODO: ADD GOOGLE PROVIDER
	],
})

export { handler as GET, handler as POST }

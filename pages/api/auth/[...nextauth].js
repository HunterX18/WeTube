import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
		}),
	],
	session: {
		jwt: true,
	},
});

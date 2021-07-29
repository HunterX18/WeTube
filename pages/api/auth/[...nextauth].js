import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: "http://localhost:3000/api/auth/callback/google",
		}),
	],
	session: {
		jwt: true,
	},
});

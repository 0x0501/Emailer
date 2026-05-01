import { env } from "cloudflare:workers";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";

export const auth = betterAuth({
	database: drizzleAdapter(env.DB, {
		provider: "sqlite",
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [
		admin(),
		tanstackStartCookies(), // make sure this is the last plugin in the array
	],
});

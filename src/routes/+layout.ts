export const prerender = true
import { inject } from '@vercel/analytics'

export async function load({ url }) {
	return { url: url.pathname }
}

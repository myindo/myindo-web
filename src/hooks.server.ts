import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.request.headers.get('host');

	// Extract hostname from host header (removing port if present)
	const hostname = host?.split(':')[0]?.toLowerCase() || '';

	// Redirect from myindo.co.id to myindo.id
	if (hostname === 'myindo.co.id') {
		const url = new URL(event.request.url);
		const targetUrl = `https://myindo.id${url.pathname}${url.search}`;
		return redirect(301, targetUrl);
	}

	return resolve(event);
};

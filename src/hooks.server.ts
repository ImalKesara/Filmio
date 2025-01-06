import { SECRET_API_KEY } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.API_KEY = SECRET_API_KEY;
	return resolve(event);
};

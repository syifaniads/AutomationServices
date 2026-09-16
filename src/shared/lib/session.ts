import { getIronSession, SessionOptions } from 'iron-session';

export interface SessionData {
	user?: {
		id: string;
		email: string;
		name: string;
		role: 'ADMIN' | 'MAHASISWA';
	};
	isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
	isLoggedIn: false,
};

function requireSessionPassword(): string {
	const password = process.env.IRON_SESSION_PASSWORD;
	if (!password) {
		throw new Error('IRON_SESSION_PASSWORD is required');
	}
	if (password.length < 32) {
		throw new Error('IRON_SESSION_PASSWORD must be at least 32 characters');
	}
	return password;
}

export const sessionOptions: SessionOptions = {
	password: requireSessionPassword(),
	cookieName: 'go-reserve-session',
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production',
		httpOnly: true,
		sameSite: 'lax' as const,
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	},
};

export async function getSessionFromRequest(
	request: Request,
	response: Response,
) {
	const session = await getIronSession<SessionData>(
		request,
		response,
		sessionOptions,
	);
	return session;
}

import { json } from '@sveltejs/kit';

export function GET() {
	const numbers = Math.floor(Math.random() * 6) + 1;
	const number1 = Math.floor(Math.random() * 6) + 1;
	return json({numbers, number1});
}

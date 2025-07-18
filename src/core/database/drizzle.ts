import { type DrizzleD1Database, drizzle } from 'drizzle-orm/d1';

export class DrizzleDB {
	private static instance?: DrizzleD1Database<Record<string, never>>;

	public static getInstance(d1: D1Database) {
		if (!DrizzleDB.instance) {
			DrizzleDB.instance = drizzle(d1);
		}

		return DrizzleDB.instance;
	}
}

import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { integer, pgTable, varchar, boolean } from "drizzle-orm/pg-core";

export const seekersTable = pgTable("seekers", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    username: varchar({ length: 255 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    profilePic: varchar('profile_pic', { length: 255 }),
    student: boolean().default(true),
    yearsOfExperience: integer('years_of_exp').default(0),
    education: varchar({ length: 255 }),
});

export const createSeekerRecord = createInsertSchema(seekersTable);

export const updateSeekerRecord = createUpdateSchema(seekersTable).partial();
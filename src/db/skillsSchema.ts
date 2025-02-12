import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { seekersTable } from "./seekersSchema";

export const skillsTable = pgTable("skills", {
    skillId: integer().primaryKey().generatedAlwaysAsIdentity(),
    seekerId: integer('seeker_id').references(() => seekersTable.id),
    skills: varchar({ length: 255 }),
});
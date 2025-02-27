import { integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core";

export const locationsTable = pgTable("locationsTable", {
    srcId: integer('src_id').generatedAlwaysAsIdentity().primaryKey(),
    region: varchar({ length: 255 }).notNull(),
    city: varchar({ length: 255 }).notNull(),
    street: varchar({ length: 255 }),
    postalCode: varchar({ length: 255 }),
})
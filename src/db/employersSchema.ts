import { createInsertSchema } from "drizzle-zod";
import { locationsTable } from "./locationsSchema";
import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const employersTable = pgTable("employers", {
    empId: integer('emp_id').primaryKey().generatedAlwaysAsIdentity(),
    companyName: varchar('company_name', { length: 255 }).notNull(),
    companyDesc: text('company_desc'),
    companyDomain: varchar('company_domain', { length: 255 }),
    password: varchar('password', { length: 255 }),
    locationId: integer('loc_id')
        .references(() => locationsTable.srcId),
})

export const createEmployerRecord = createInsertSchema(employersTable)
import { createInsertSchema } from "drizzle-zod";
import { locationsTable } from "./locationsSchema";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const employersTable = pgTable("employers", {
    empId: integer('emp_id').primaryKey().generatedAlwaysAsIdentity(),
    companyName: varchar('company_name', { length: 255 }).notNull(),
    companyDesc: varchar('company_desc', { length: 255}),
    companyDomain: varchar('company_domain', { length: 255 }),
    password: varchar('password', { length: 255 }),
    locationId: integer('loc_id')
        .references(() => locationsTable.srcId),
})

export const createEmployerRecord = createInsertSchema(employersTable)
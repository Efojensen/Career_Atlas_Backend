import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { employersTable } from "./employersSchema";

export const jobsTable = pgTable("jobs", {
    jobId: integer('job_id'),
    jobName: varchar('job_name', { length: 255 }).notNull(),
    jobDescription: varchar('job_desc', { length: 255 }),
    benefits: varchar({ length: 255 }),
    jobType: varchar('job_type', { length: 10 }).notNull(),
    timePosted: timestamp('time_posted', { mode: 'string' }).notNull().defaultNow(),
    pay: integer().notNull(),
    srcId: integer('src_id').references(() => employersTable.empId)
});
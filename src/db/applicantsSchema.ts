import { jobsTable } from "./jobsSchema";
import { seekersTable } from "./seekersSchema";
import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";

export const applicantsTable = pgTable('applicants', {
    appliedJobId: integer('applied_job_id').references(() => jobsTable.jobId),
    jobSeekerId: integer('job_seeker_id').references(() => seekersTable.id)
},
    (table) => ({
        primaryKey: {columns: [table.appliedJobId, table.jobSeekerId]}
    })
)
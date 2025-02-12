import { integer, pgTable } from "drizzle-orm/pg-core";
import { jobsTable } from "./jobsSchema";
import { seekersTable } from "./seekersSchema";

export const applicantsTable = pgTable('applicants', {
    appliedJobId: integer('applied_job_id').references(() => jobsTable.jobId),
    jobSeekerId: integer('job_seeker_id').references(() => seekersTable.id)
})
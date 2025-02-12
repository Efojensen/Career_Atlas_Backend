import { integer, pgTable } from "drizzle-orm/pg-core";
import { jobsTable } from "./jobsSchema";
import { seekersTable } from "./seekersSchema";

export const appliedJobsTable = pgTable('appliedJobs', {
    jobSeekerId: integer('job_seeker_id')
        .references(() => seekersTable.id),
    desiredJobId: integer('desired_job_id')
        .references(() => jobsTable.jobId),
})
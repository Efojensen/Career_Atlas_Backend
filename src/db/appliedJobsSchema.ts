import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { jobsTable } from "./jobsSchema";
import { seekersTable } from "./seekersSchema";

export const appliedJobsTable = pgTable('appliedJobs', {
    jobSeekerId: integer('job_seeker_id').unique()
        .references(() => seekersTable.id),
    desiredJobId: integer('desired_job_id').unique()
        .references(() => jobsTable.jobId),
},
    (table) => ({
        primaryKey: {columns: [table.jobSeekerId, table.desiredJobId]}
    })
)
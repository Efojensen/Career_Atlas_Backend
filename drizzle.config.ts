import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: [
        './src/db/locationsSchema.ts',
        './src/db/employersSchema.ts',
        './src/db/jobsSchema.ts',
        './src/db/seekersSchema.ts',
        './src/db/applicantsSchema.ts',
        './src/db/appliedJobsSchema.ts',
    ],
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    strict: true,
    verbose: true,
});
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: [
        './jobsSchema.ts',
        './skillsSchema.ts',
        './seekersSchema.ts',
        './locationsSchema.ts',
        './src/db/employersSchema.ts',
        './src/db/applicantsSchema.ts',
        './src/db/appliedJobsSchema.ts',
    ],
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env["DATABASE_URL"]!,
    },
});
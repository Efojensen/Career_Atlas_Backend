export {}

declare global {
    namespace Express {
        export interface Request{
            userData?: {
                email: string;
                username: string;
                password: string;
                student: boolean;
                education: string;
                profilePic: string;
                yearsOfEducation: number;
            },
            compData?: {
                password: string;
                companyName: string;
                companyDesc: string;
                companyDomain: string;
            }
        }
    }
}
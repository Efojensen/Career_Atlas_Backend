export {}

declare global {
    namespace Express {
        export interface Request{
            intel: any
        }
    }
}
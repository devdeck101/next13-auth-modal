export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_CLIENT_ID: string;
            GITHUB_CLIENT_SECRET: string;
            NEXTAUTH_URL: string;
            NEXTAUTH_SECRET: string;
            DATABASE_URL: string;
        }
    }
}
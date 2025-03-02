import { ErrorPaths } from "./models";

export const ERROR_PATH:ErrorPaths = {
    NotFound:'not-found',
    Internal:'internal',
    Forbidden:'forbidden',
    Unauthorized:'unauthorized'
} as const;
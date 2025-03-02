export type ErrorType = 'NotFound'|'Internal'|'Forbidden'|'Unauthorized';
export type ErrorPaths = Record<ErrorType, string>;

export abstract class BaseError extends Error{
    constructor(readonly type: ErrorType, message?:string, options?: ErrorOptions) {
        super(message, options);
    }
}

export function isBaseError(error:unknown): error is BaseError{
    return error != null && error instanceof BaseError;
}

export class NotFoundError extends BaseError{
    constructor(message?:string, options?: ErrorOptions) {
        super('NotFound', message, options);
    }
}

export class InternalError extends BaseError{
    constructor(message?:string, options?: ErrorOptions) {
        super('Internal', message, options);
    }
}

export class ForbiddenError extends BaseError{
    constructor(message?:string, options?: ErrorOptions) {
        super('Forbidden', message, options);
    }
}

export class UnauthorizedError extends BaseError{
    constructor(message?:string, options?: ErrorOptions) {
        super('Unauthorized', message, options);
    }
}
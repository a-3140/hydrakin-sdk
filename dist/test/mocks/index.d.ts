export interface MockHandlersOpts {
    tokenExpirationPeriod?: number;
}
export declare const mockHandlers: ({ tokenExpirationPeriod, }?: MockHandlersOpts) => import("msw").GraphQLHandler<import("msw").GraphQLRequest<any>>[];

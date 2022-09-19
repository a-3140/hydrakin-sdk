import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare type FetchConfig = Partial<{
    /**
     * Enable auto token refreshing. Default to `true`.
     */
    autoTokenRefresh: boolean;
    /**
     * Set a value for skew between local time and token expiration date in
     * seconds (only together with `autoTokenRefresh`). Defaults to `120`.
     */
    tokenRefreshTimeSkew: number;
    /**
     * Refresh token and retry the request when Saleor responds with `Unauthorized` error.
     * Defaults to `true`.
     */
    refreshOnUnauthorized: boolean;
}>;
export declare const createFetch: ({ autoTokenRefresh, tokenRefreshTimeSkew, refreshOnUnauthorized, }?: FetchConfig) => (input: RequestInfo, init?: RequestInit) => Promise<Response>;
export declare const createApolloClient: (apiUrl: string, autologin: boolean, fetchOptions?: Partial<{
    /**
     * Enable auto token refreshing. Default to `true`.
     */
    autoTokenRefresh: boolean;
    /**
     * Set a value for skew between local time and token expiration date in
     * seconds (only together with `autoTokenRefresh`). Defaults to `120`.
     */
    tokenRefreshTimeSkew: number;
    /**
     * Refresh token and retry the request when Saleor responds with `Unauthorized` error.
     * Defaults to `true`.
     */
    refreshOnUnauthorized: boolean;
}> | undefined) => ApolloClient<NormalizedCacheObject>;

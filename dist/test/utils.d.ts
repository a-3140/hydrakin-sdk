import { GraphQLRequest } from "msw";
import { SaleorClient } from "../src/core";
import { ExternalObtainAccessTokensMutation } from "../src/apollo/types";
export declare const removeBlacklistedVariables: (obj: {}) => {};
export declare const testTokenSecret = "secret";
export declare const testCsrfToken = "sSrkI91Yyho52LTNWLuh6WkPwC5NAP49n1TdB4Oh4Hrw7NuQ1oj7ga3j5aE82b2O";
export declare const createTestToken: (expirationPeriodInSeconds?: number) => string;
export declare const verifyTestToken: (token: string) => boolean;
export declare const verifyAuthorization: (request: GraphQLRequest<any>) => boolean;
interface CallbackQueryParams {
    code: string;
    state: string;
}
export declare const loginWithExternalPlugin: (saleor: SaleorClient, callbackQueryParams: CallbackQueryParams) => Promise<ExternalObtainAccessTokensMutation | null | undefined>;
export {};

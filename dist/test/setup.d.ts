import { Context } from "setup-polly-jest";
import { PollyServer } from "@pollyjs/core";
import { SaleorClient } from "../src/core";
import { MockHandlersOpts } from "./mocks";
export declare const setupPollyMiddleware: (server: PollyServer) => void;
export declare const setupRecording: () => Context;
export declare const setupMockServer: (opts?: MockHandlersOpts | undefined) => import("msw/lib/types/node").SetupServerApi;
export declare const setupSaleorClient: (fetchOpts?: Partial<{
    autoTokenRefresh: boolean;
    tokenRefreshTimeSkew: number;
    refreshOnUnauthorized: boolean;
}> | undefined) => SaleorClient;

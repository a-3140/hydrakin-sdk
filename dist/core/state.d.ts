import { UserQuery } from "../apollo/types";
import { SaleorClientInternals } from "./types";
export declare type State = UserQuery | null;
export declare const getState: (client: SaleorClientInternals["apolloClient"]) => State;

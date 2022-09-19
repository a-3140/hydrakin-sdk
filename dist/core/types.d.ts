import { ApolloClient, FetchResult, NormalizedCacheObject } from "@apollo/client";
import { AccountRegisterInput, MutationAccountAddressCreateArgs, MutationAccountAddressUpdateArgs, MutationAccountSetDefaultAddressArgs, MutationAccountUpdateArgs, MutationExternalAuthenticationUrlArgs, MutationPasswordChangeArgs, MutationTokenCreateArgs, MutationTokenRefreshArgs, MutationRequestPasswordResetArgs, MutationSetPasswordArgs, MutationRequestEmailChangeArgs, AccountConfirmMutationVariables, MutationExternalLogoutArgs, ExternalAuthenticationUrlMutation, ExternalLogoutMutation, ExternalObtainAccessTokensMutation, ExternalRefreshMutation, ExternalVerifyMutation, LoginMutation, RefreshTokenMutation, RegisterMutation, RequestPasswordResetMutation, SetPasswordMutation, VerifyTokenMutation, PasswordChangeMutation, MutationExternalObtainAccessTokensArgs, AccountDeleteMutation, AccountRequestDeletionMutation, AccountConfirmMutation, AccountUpdateMutation, ConfirmEmailChangeMutation, CreateAccountAddressMutation, DeleteAccountAddressMutation, RequestEmailChangeMutation, SetAccountDefaultAddressMutation, UpdateAccountAddressMutation } from "../apollo/types";
import { AuthSDK } from "./auth";
import { UserSDK } from "./user";
import { State } from "./state";
import { FetchConfig } from "../apollo";
export interface SaleorClientInternals {
    apolloClient: ApolloClient<NormalizedCacheObject>;
}
export interface SaleorClientConfig {
    channel: string;
    autologin: boolean;
    setChannel(channel: string): string;
}
export interface SaleorClient {
    auth: AuthSDK;
    user: UserSDK;
    config: SaleorClientConfig;
    _internal: SaleorClientInternals;
    getState(): State;
}
interface SaleorClientFetchOpts {
    autologin?: boolean;
    fetchOpts?: FetchConfig;
}
export interface SaleorClientOpts {
    apiUrl: string;
    channel: string;
    opts?: SaleorClientFetchOpts;
}
export declare type SaleorClientMethodsProps = SaleorClientInternals & Pick<SaleorClientConfig, "channel">;
export declare type JWTToken = {
    iat: number;
    iss: string;
    owner: string;
    exp: number;
    token: string;
    email: string;
    type: string;
    user_id: string;
    is_staff: boolean;
};
export declare type ChangePasswordOpts = MutationPasswordChangeArgs;
export declare type LoginOpts = MutationTokenCreateArgs & {
    includeDetails?: boolean;
};
export declare type RefreshTokenOpts = Pick<MutationTokenRefreshArgs, "csrfToken">;
export declare type RegisterOpts = AccountRegisterInput;
export declare type RequestPasswordResetOpts = MutationRequestPasswordResetArgs;
export declare type SetPasswordOpts = MutationSetPasswordArgs;
export declare type GetExternalAuthUrlOpts = MutationExternalAuthenticationUrlArgs;
export declare type GetExternalAccessTokenOpts = MutationExternalObtainAccessTokensArgs;
export declare type LogoutOpts = Pick<MutationExternalLogoutArgs, "input">;
export declare type CreateAccountAddressOpts = MutationAccountAddressCreateArgs;
export declare type RequestEmailChangeOpts = MutationRequestEmailChangeArgs;
export declare type SetAccountDefaultAddressOpts = MutationAccountSetDefaultAddressArgs;
export declare type UpdateAccountOpts = MutationAccountUpdateArgs;
export declare type UpdateAccountAddressOpts = MutationAccountAddressUpdateArgs;
export declare type ConfirmAccountOpts = AccountConfirmMutationVariables;
export declare type ChangePasswordResult = FetchResult<PasswordChangeMutation>;
export declare type ChangePasswordData = PasswordChangeMutation["passwordChange"];
export declare type LoginResult = FetchResult<LoginMutation>;
export declare type LoginData = LoginMutation["tokenCreate"];
export declare type LogoutResult = FetchResult<ExternalLogoutMutation> | null;
export declare type LogoutData = ExternalLogoutMutation["externalLogout"] | null;
export declare type RefreshTokenResult = FetchResult<RefreshTokenMutation>;
export declare type RefreshTokenData = RefreshTokenMutation["tokenRefresh"];
export declare type RegisterResult = FetchResult<RegisterMutation>;
export declare type RegisterData = RegisterMutation["accountRegister"];
export declare type RequestPasswordResetResult = FetchResult<RequestPasswordResetMutation>;
export declare type RequestPasswordResetData = RequestPasswordResetMutation["requestPasswordReset"];
export declare type SetPasswordResult = FetchResult<SetPasswordMutation>;
export declare type SetPasswordData = SetPasswordMutation["setPassword"];
export declare type VerifyTokenResult = FetchResult<VerifyTokenMutation>;
export declare type VerifyTokenData = VerifyTokenMutation["tokenVerify"];
export declare type GetExternalAuthUrlResult = FetchResult<ExternalAuthenticationUrlMutation>;
export declare type GetExternalAuthUrlData = ExternalAuthenticationUrlMutation["externalAuthenticationUrl"];
export declare type GetExternalAccessTokenResult = FetchResult<ExternalObtainAccessTokensMutation>;
export declare type GetExternalAccessTokenData = ExternalObtainAccessTokensMutation["externalObtainAccessTokens"];
export declare type RefreshExternalTokenResult = FetchResult<ExternalRefreshMutation>;
export declare type RefreshExternalTokenData = ExternalRefreshMutation["externalRefresh"];
export declare type VerifyExternalTokenResult = FetchResult<ExternalVerifyMutation>;
export declare type VerifyExternalTokenData = ExternalVerifyMutation["externalVerify"];
export declare type AccountDeleteResult = FetchResult<AccountDeleteMutation>;
export declare type AccountDeleteData = AccountDeleteMutation["accountDelete"];
export declare type AccountRequestDeletionResult = FetchResult<AccountRequestDeletionMutation>;
export declare type AccountRequestDeletionData = AccountRequestDeletionMutation["accountRequestDeletion"];
export declare type ConfirmEmailChangeResult = FetchResult<ConfirmEmailChangeMutation>;
export declare type ConfirmEmailChangeData = ConfirmEmailChangeMutation["confirmEmailChange"];
export declare type CreateAccountAddressResult = FetchResult<CreateAccountAddressMutation>;
export declare type CreateAccountAddressData = CreateAccountAddressMutation["accountAddressCreate"];
export declare type DeleteAccountAddressResult = FetchResult<DeleteAccountAddressMutation>;
export declare type DeleteAccountAddressData = DeleteAccountAddressMutation["accountAddressDelete"];
export declare type RequestEmailChangeResult = FetchResult<RequestEmailChangeMutation>;
export declare type RequestEmailChangeData = RequestEmailChangeMutation["requestEmailChange"];
export declare type SetAccountDefaultAddressResult = FetchResult<SetAccountDefaultAddressMutation>;
export declare type SetAccountDefaultAddressData = SetAccountDefaultAddressMutation["accountSetDefaultAddress"];
export declare type UpdateAccountResult = FetchResult<AccountUpdateMutation>;
export declare type UpdateAccountData = AccountUpdateMutation["accountUpdate"];
export declare type UpdateAccountAddressResult = FetchResult<UpdateAccountAddressMutation>;
export declare type UpdateAccountAddressData = UpdateAccountAddressMutation["accountAddressUpdate"];
export declare type ConfirmAccountResult = FetchResult<AccountConfirmMutation>;
export declare type ConfirmAccountData = AccountConfirmMutation["confirmAccount"];
export {};

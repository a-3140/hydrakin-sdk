import { ChangePasswordResult, LogoutOpts, GetExternalAccessTokenResult, GetExternalAuthUrlResult, LoginResult, LogoutResult, RefreshExternalTokenResult, RefreshTokenResult, RegisterResult, RequestPasswordResetResult, SaleorClientMethodsProps, SetPasswordResult, VerifyExternalTokenResult, VerifyTokenResult, GetExternalAuthUrlOpts, GetExternalAccessTokenOpts } from "./types";
import { ChangePasswordOpts, LoginOpts, RegisterOpts, RequestPasswordResetOpts, SetPasswordOpts } from "./types";
export interface AuthSDK {
    /**
     * Change the password of the logged in user.
     *
     * @param opts - Object with password and new password.
     * @returns Errors if the passoword change has failed.
     */
    changePassword: (opts: ChangePasswordOpts) => Promise<ChangePasswordResult>;
    /**
     * Authenticates user with email and password.
     *
     * @param opts - Object with user's email, password and a boolean includeDetails - whether to fetch user details.
     * Default for includeDetails is true.
     * @returns Promise resolved with CreateToken type data.
     */
    login: (opts: LoginOpts) => Promise<LoginResult>;
    /**
     * Clears stored token and Apollo store. If external plugin was used to log in, the mutation will prepare
     * the logout URL. All values passed in field input will be added as GET parameters to the logout request.
     *
     * @param opts - Object with input as JSON with returnTo - the URL where a user should be redirected
     * when external plugin was used to log in
     * @returns Logout data and errors if external plugin was used to log in. Otherwise null.
     */
    logout: (opts?: LogoutOpts) => Promise<LogoutResult>;
    /**
     * Refresh JWT token. Mutation will try to take refreshToken from the function's arguments.
     * If it fails, it will try to use refreshToken from the http-only cookie called refreshToken.
     *
     * @param includeUser - Whether to fetch user. Default false.
     * @returns Authorization token.
     */
    refreshToken: (includeUser?: boolean) => Promise<RefreshTokenResult>;
    /**
     * Registers user with email and password.
     *
     * @param opts - Object with user's data. Email and password are required fields.
     * "channel" can be changed by using first "setChannel" method from api.
     * @returns Promise resolved with AccountRegister type data.
     */
    register: (opts: RegisterOpts) => Promise<RegisterResult>;
    /**
     * Sends an email with the account password modification link.
     *
     * @param opts - Object with slug of a channel which will be used for notify user,
     * email of the user that will be used for password recovery and URL of a view
     * where users should be redirected to reset the password. URL in RFC 1808 format.
     *
     * @returns Errors if there were some.
     */
    requestPasswordReset: (opts: RequestPasswordResetOpts) => Promise<RequestPasswordResetResult>;
    /**
     * Sets the user's password from the token sent by email.
     *
     * @param opts - Object with user's email, password and one-time token required to set the password.
     * @returns User instance, JWT token, JWT refresh token and CSRF token.
     */
    setPassword: (opts: SetPasswordOpts) => Promise<SetPasswordResult>;
    /**
     * Verify JWT token.
     *
     * @param token - Token value.
     * @returns User assigned to token and the information if the token is valid or not.
     */
    verifyToken: () => Promise<VerifyTokenResult>;
    /**
     * Executing externalAuthenticationUrl mutation will prepare special URL which will redirect user to requested
     * page after successfull authentication. After redirection state and code fields will be added to the URL.
     *
     * @param opts - Object withpluginId default value set as "mirumee.authentication.openidconnect" and input as
     * JSON with redirectUrl - the URL where the user should be redirected after successful authentication.
     * @returns Authentication data and errors
     */
    getExternalAuthUrl: (opts: GetExternalAuthUrlOpts) => Promise<GetExternalAuthUrlResult>;
    /**
     * The externalObtainAccessTokens mutation will generate requested access tokens.
     *
     * @param opts - Object withpluginId default value set as "mirumee.authentication.openidconnect" and input as
     * JSON with code - the authorization code received from the OAuth provider and state - the state value received
     * from the OAuth provider
     * @returns Login authentication data and errors
     */
    getExternalAccessToken: (opts: GetExternalAccessTokenOpts) => Promise<GetExternalAccessTokenResult>;
    /**
     * The externalRefresh mutation will generate new access tokens when provided with a valid refresh token.
     *
     * @param includeUser - Whether to fetch user. Default false.
     * @returns Token refresh data and errors
     */
    refreshExternalToken: (includeUser?: boolean) => Promise<RefreshExternalTokenResult>;
    /**
     * The mutation will verify the authentication token.
     *
     * @returns Token verification data and errors
     */
    verifyExternalToken: () => Promise<VerifyExternalTokenResult>;
}
export declare const auth: ({ apolloClient: client, channel, }: SaleorClientMethodsProps) => AuthSDK;

import { AccountDeleteResult, AccountRequestDeletionResult, ConfirmAccountOpts, ConfirmAccountResult, ConfirmEmailChangeResult, CreateAccountAddressResult, DeleteAccountAddressResult, RequestEmailChangeResult, SaleorClientMethodsProps, SetAccountDefaultAddressResult, UpdateAccountAddressResult, UpdateAccountResult } from "./types";
import { CreateAccountAddressOpts, RequestEmailChangeOpts, SetAccountDefaultAddressOpts, UpdateAccountOpts, UpdateAccountAddressOpts } from "./types";
export interface UserSDK {
    /**
     * Remove user account.
     *
     * @param token - A one-time token required to remove account. Sent by email using AccountRequestDeletion mutation.
     * @returns Deleted user's account data and errors.
     */
    accountDelete: (token: string) => Promise<AccountDeleteResult>;
    /**
     * Sends an email with the account removal link for the logged-in user.
     *
     * @param redirectUrl - URL of a view where users should be redirected to delete their account. URL in RFC 1808 format.
     * @returns Errors if there are some.
     */
    accountRequestDeletion: (redirectUrl: string) => Promise<AccountRequestDeletionResult>;
    /**
     * Confirm the email change of the logged-in user.
     *
     * @param token - A one-time token required to change the email.
     * @returns A user instance with a new email and errors.
     */
    confirmEmailChange: (token: string) => Promise<ConfirmEmailChangeResult>;
    /**
     * Create a new address for the account.
     *
     * @param opts - Object with fields required to create address and a type of address.
     * If provided, the new address will be automatically assigned as the customer's default address of that type.
     * @returns Updated user account.
     */
    createAccountAddress: (opts: CreateAccountAddressOpts) => Promise<CreateAccountAddressResult>;
    /**
     * Delete an address of the logged-in account.
     *
     * @param addressId - ID of the address to delete.
     * @returns Updated user account.
     */
    deleteAccountAddress: (addressId: string) => Promise<DeleteAccountAddressResult>;
    /**
     * Request email change of the logged in user.
     *
     * @param opts - Object with new user email, user's password and URL of a view where users should be redirected to update the email address.
     * @returns A user instance and errors.
     */
    requestEmailChange: (opts: RequestEmailChangeOpts) => Promise<RequestEmailChangeResult>;
    /**
     * Sets a default address for the authenticated account.
     *
     * @param opts - Object with ID of the address to set as default and the type of address.
     * @returns Updated user account.
     */
    setAccountDefaultAddress: (opts: SetAccountDefaultAddressOpts) => Promise<SetAccountDefaultAddressResult>;
    /**
     * Updates the account of the logged-in account.
     *
     * @param opts - Fields required to update the account of the logged-in account.
     * @returns Updated user account.
     */
    updateAccount: (opts: UpdateAccountOpts) => Promise<UpdateAccountResult>;
    /**
     * Updates an address of the logged-in account.
     *
     * @param opts - Object with ID of the address to update and fields required to update the address.
     * @returns Updated user account.
     */
    updateAccountAddress: (opts: UpdateAccountAddressOpts) => Promise<UpdateAccountAddressResult>;
    /**
     * Confirms user account with token sent by email during registration.
     *
     * @param opts - Object with email of the user and one-time token required to confirm the account.
     * @returns Confirmed user account.
     */
    confirmAccount: (opts: ConfirmAccountOpts) => Promise<ConfirmAccountResult>;
}
export declare const user: ({ apolloClient: client, channel, }: SaleorClientMethodsProps) => UserSDK;

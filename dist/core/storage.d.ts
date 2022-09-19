export declare let storage: {
    setAuthPluginId: (method: string | null) => void;
    getAuthPluginId: () => string | null;
    setAccessToken: (token: string | null) => void;
    getAccessToken: () => string | null;
    setCSRFToken: (token: string | null) => void;
    getCSRFToken: () => string | null;
    setTokens: (tokens: {
        accessToken: string | null;
        csrfToken: string | null;
    }) => void;
    clear: () => void;
};
export declare const createStorage: (autologinEnabled: boolean) => void;

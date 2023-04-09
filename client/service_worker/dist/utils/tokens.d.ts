import { OidcConfig, OidcServerConfiguration, Tokens } from '../types';
declare function b64DecodeUnicode(str: string): string;
declare function computeTimeLeft(refreshTimeBeforeTokensExpirationInSecond: number, expiresAt: number): number;
declare function isTokensValid(tokens: Tokens | null): boolean;
declare const extractTokenPayload: (token?: string) => any;
declare const isTokensOidcValid: (tokens: Tokens, nonce: string | null, oidcServerConfiguration: OidcServerConfiguration) => {
    isValid: boolean;
    reason: string;
};
declare function hideTokens(currentDatabaseElement: OidcConfig): (response: Response) => Response | Promise<Response>;
export { b64DecodeUnicode, computeTimeLeft, isTokensValid, extractTokenPayload, isTokensOidcValid, hideTokens };
//# sourceMappingURL=tokens.d.ts.map
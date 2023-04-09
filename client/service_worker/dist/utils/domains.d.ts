import { TrustedDomains } from './../types';
import { Database, Domain, OidcConfig } from '../types';
declare function checkDomain(domains: Domain[], endpoint: string): void;
declare const getCurrentDatabaseDomain: (database: Database, url: string, trustedDomains: TrustedDomains) => OidcConfig | null;
export { checkDomain, getCurrentDatabaseDomain };
//# sourceMappingURL=domains.d.ts.map
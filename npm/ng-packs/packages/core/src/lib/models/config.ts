import { Type } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { ApplicationConfiguration } from './application-configuration';
import { ABP } from './common';

export namespace Config {
  export type State = ApplicationConfiguration.Response & ABP.Root & { environment: Environment };

  export interface Environment {
    apis: Apis;
    application: Application;
    hmr?: boolean;
    localization?: { defaultResourceName?: string };
    oAuthConfig: AuthConfig;
    production: boolean;
    remoteEnv?: RemoteEnv;
  }

  export interface Application {
    name: string;
    baseUrl?: string;
    logoUrl?: string;
  }

  export interface ApiConfig {
    [key: string]: string;
    url: string;
  }

  export interface Apis {
    [key: string]: ApiConfig;
    default: ApiConfig;
  }

  export interface Requirements {
    layouts: Type<any>[];
  }

  export interface LocalizationWithDefault {
    key: string;
    defaultValue: string;
  }

  export type LocalizationParam = string | LocalizationWithDefault;

  export interface RemoteEnv {
    url: string;
    method?: string;
    headers?: ABP.Dictionary<string>;
  }
}

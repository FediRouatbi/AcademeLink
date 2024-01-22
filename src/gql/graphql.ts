/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AuthNextStepEnum {
  EmailValidation = 'EMAIL_VALIDATION',
  Pass = 'PASS',
  ResetPasswod = 'RESET_PASSWOD',
  ResetPasswodFinish = 'RESET_PASSWOD_FINISH',
  TwoFactorAuth = 'TWO_FACTOR_AUTH'
}

export type DeleteAccountInput = {
  password: Scalars['String']['input'];
};

export type FilterRoleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ForgotPasswordByEmailInput = {
  email: Scalars['String']['input'];
};

export type ForgotPasswordByUserNameInput = {
  user_name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAccount: User;
  forgotPasswordByEmail: SignedIn;
  forgotPasswordByUserName: SignedIn;
  playerSignUp: SignedIn;
  reSendOtp: SignedIn;
  refreshToken: SignedIn;
  resetPassword: SignedIn;
  signInEmail: SignedIn;
  signInUserName: SignedIn;
  updatePassword: SignedIn;
  validateOtp: SignedIn;
};


export type MutationDeleteAccountArgs = {
  deleteAccountInput: DeleteAccountInput;
};


export type MutationForgotPasswordByEmailArgs = {
  forgotPasswordByEmailInput: ForgotPasswordByEmailInput;
};


export type MutationForgotPasswordByUserNameArgs = {
  forgotPasswordByUserNameInput: ForgotPasswordByUserNameInput;
};


export type MutationPlayerSignUpArgs = {
  playerSignUpInput: PlayerSignUpInput;
};


export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSignInEmailArgs = {
  signInEmailInput: SignInEmailInput;
};


export type MutationSignInUserNameArgs = {
  signInUserNameInput: SignInUserNameInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};


export type MutationValidateOtpArgs = {
  otpValidationInput: OtpValidationInput;
};

export type OtpValidationInput = {
  otp: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  isFirstPage: Scalars['Boolean']['output'];
  isLastPage: Scalars['Boolean']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  pageCount: Scalars['Int']['output'];
  previousPage?: Maybe<Scalars['Int']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedRole = {
  __typename?: 'PaginatedRole';
  data: Array<Role>;
  pageInfo: PageInfo;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PlayerSignUpInput = {
  confirm_password: Scalars['String']['input'];
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  user_name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getMyProfile: User;
};

export type RefreshTokenInput = {
  refresh_token: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  confirm_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  name: Scalars['String']['output'];
  role_code: RoleCodeEnum;
  role_id: Scalars['Int']['output'];
};

export enum RoleCodeEnum {
  Admin = 'ADMIN',
  Client = 'CLIENT'
}

export type RoleFindOptionsInput = {
  filterOption?: InputMaybe<FilterRoleInput>;
  searchOption?: InputMaybe<SearchRoleInput>;
  sortOption?: InputMaybe<SortRoleInput>;
};

export enum RoleSearchableFieldsEnum {
  Name = 'name',
  RoleCode = 'role_code'
}

export enum RoleSortableFieldsEnum {
  Name = 'name',
  RoleCode = 'role_code'
}

export type SearchRoleInput = {
  fields: Array<RoleSearchableFieldsEnum>;
  value: Scalars['String']['input'];
};

export type SignInEmailInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInUserNameInput = {
  password: Scalars['String']['input'];
  user_name: Scalars['String']['input'];
};

export type SignedIn = {
  __typename?: 'SignedIn';
  email?: Maybe<Scalars['String']['output']>;
  next_step: AuthNextStepEnum;
  refresh_token?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export enum SortOrderEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortRoleInput = {
  field: RoleSortableFieldsEnum;
  order: SortOrderEnum;
};

export type UpdatePasswordInput = {
  confirm_password: Scalars['String']['input'];
  old_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  first_name: Scalars['String']['output'];
  force_reset_password: Scalars['Boolean']['output'];
  last_name: Scalars['String']['output'];
  roles: PaginatedRole;
  two_factor_auth: Scalars['Boolean']['output'];
  user_id: Scalars['Int']['output'];
  user_name: Scalars['String']['output'];
};


export type UserRolesArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
  roleFindOptionsInput?: InputMaybe<RoleFindOptionsInput>;
};

export type GetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProfileQuery = { __typename?: 'Query', getMyProfile: { __typename?: 'User', user_id: number, user_name: string, first_name: string, last_name: string, force_reset_password: boolean, two_factor_auth: boolean } };


export const GetMyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"force_reset_password"}},{"kind":"Field","name":{"kind":"Name","value":"two_factor_auth"}}]}}]}}]} as unknown as DocumentNode<GetMyProfileQuery, GetMyProfileQueryVariables>;
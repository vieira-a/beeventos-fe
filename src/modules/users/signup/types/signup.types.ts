import { AccountRoles } from './account-roles';

export type SignupResponse = {
  statusCode: number | undefined;
  message: string | undefined;
};

export type SignupData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  role: AccountRoles;
};

export type SignupState = {
  signupResponse: SignupResponse;
  isSignupDialogOpen: boolean;
  setSignupResponse: (response: SignupResponse) => void;
  clearSignupResponse: () => void;
  openSignupDialog: () => void;
  closeSignupDialog: () => void;
};

export const initialSignupResponse: SignupResponse = {
  message: undefined,
  statusCode: undefined,
};

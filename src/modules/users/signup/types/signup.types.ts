import { AccountRoles } from './account-roles';

export type SignupData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  role: AccountRoles;
};

export type SignupState = {
  // email: string;
  // password: string;
  // loginRole: string;
  // errorMessage: string;
  isSignupDialogOpen: boolean;
  openSignupDialog: () => void;
  closeSignupDialog: () => void;
  // setLoginRole: (loginRole: string) => void;
  // login: (email: string, password: string, loginRole: string) => void;
  // logout: () => void;
};

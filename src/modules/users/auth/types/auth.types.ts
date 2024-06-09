export type AuthState = {
  email: string;
  password: string;
  loginRole: string;
  errorMessage: string;
  isLoginDialogOpen: boolean;
  openLoginDialog: () => void;
  closeLoginDialog: () => void;
  setLoginRole: (loginRole: string) => void;
  login: (email: string, password: string, loginRole: string) => void;
  logout: () => void;
};

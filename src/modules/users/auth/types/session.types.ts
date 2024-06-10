export type SessionStore = {
  access_token: string;
  isLogged: boolean;
  userRole: string;
  userId: string;
  setAccessToken: (token: string) => void;
  setUserProfile: () => void;
  setUserRole: (role: string) => void;
  setUserId: (userId: string) => void;
  clearAccessToken: () => void;
};

import { create } from 'zustand';

interface SessionStore {
  access_token: string;
  isLogged: boolean;
  userRole: string;
  setAccessToken: (token: string) => void;
  setUserRole: (role: string) => void;
  clearAccessToken: () => void;
}

const useSessionStore = create<SessionStore>((set) => ({
  access_token: localStorage.getItem('access_token') || '',
  isLogged: !!localStorage.getItem('access_token'),
  userRole: '',

  setAccessToken: (token) => {
    localStorage.setItem('access_token', token);
    set((state) => ({ ...state, access_token: token, isLogged: true }));
  },

  setUserRole: (role: string) => {
    set((state) => ({ ...state, userRole: role }));
  },

  clearAccessToken: () => {
    localStorage.removeItem('access_token');
    set((state) => ({
      ...state,
      access_token: '',
      isLogged: false,
      userRole: '',
    }));
  },
}));

export default useSessionStore;

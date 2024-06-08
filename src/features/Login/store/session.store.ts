import { create } from 'zustand';

import { LoginService } from '../services/login.service';

interface SessionStore {
  access_token: string;
  isLogged: boolean;
  userRole: string;
  userId: string;
  setAccessToken: (token: string) => void;
  setUserProfile: () => void;
  setUserRole: (role: string) => void;
  setUserId: (userId: string) => void;
  clearAccessToken: () => void;
}

const useSessionStore = create<SessionStore>((set) => ({
  access_token: localStorage.getItem('access_token') || '',
  isLogged: !!localStorage.getItem('access_token'),
  userRole: '',
  userId: '',

  setAccessToken: (token) => {
    localStorage.setItem('access_token', token);
    set((state) => ({ ...state, access_token: token, isLogged: true }));
  },

  setUserRole: (role: string) => {
    set((state) => ({ ...state, userRole: role }));
  },

  setUserId: (userId: string) => {
    set((state) => ({ ...state, userId: userId }));
  },

  setUserProfile: async () => {
    const loginService = new LoginService();
    const token = localStorage.getItem('access_token');
    if (token) {
      const userProfile = await loginService.readUserProfile(token);
      set((state) => ({ ...state, userRole: userProfile.role }));
      set((state) => ({ ...state, userId: userProfile.id }));
    }
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

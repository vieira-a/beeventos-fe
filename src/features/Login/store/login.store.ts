import { create } from "zustand";

import { LoginService } from "../services/login.service";
import useSessionStore from "./session.store";

interface LoginState {
  email: string;
  password: string;
  errorMessage: string;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const useLoginStore = create<LoginState>((set) => ({
  email: "",
  password: "",
  errorMessage: "",

  login: async (email, password) => {
    const loginService = new LoginService();
    set({ email, password });

    const data = await loginService.userLogin(email, password);

    if (data?.access_token) {
      useSessionStore.getState().setAccessToken(data?.access_token);
      set({ errorMessage: "" });
    } else {
      set({ errorMessage: data.message });
      throw new Error(data.message);
    }
  },

  logout: () => {
    useSessionStore.getState().clearAccessToken();
  },
}));

export default useLoginStore;

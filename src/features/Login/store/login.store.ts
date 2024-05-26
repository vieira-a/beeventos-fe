import { create } from "zustand";

import { LoginService } from "../services/login.service";
import useSessionStore from "./session.store";

interface LoginState {
  email: string;
  password: string;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const useLoginStore = create<LoginState>((set) => ({
  email: "",
  password: "",

  login: async (email, password) => {
    const loginService = new LoginService();
    set({ email, password });

    const data = await loginService.userLogin(email, password);
    console.log(data);

    if (data?.access_token) {
      useSessionStore.getState().setAccessToken(data?.access_token);
    } else {
      throw new Error("Houve uma falha ao receber o token de acesso");
    }
  },

  logout: () => {
    useSessionStore.getState().clearAccessToken();
  },
}));

export default useLoginStore;

import { create } from "zustand";

interface SessionStore {
  access_token: string;
  isLogged: boolean;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

const useSessionStore = create<SessionStore>((set) => ({
  access_token: localStorage.getItem("access_token") || "",
  isLogged: !!localStorage.getItem("access_token"),

  setAccessToken: (token) => {
    localStorage.setItem("access_token", token);
    set((state) => ({ ...state, access_token: token, isLogged: true }));
  },

  clearAccessToken: () => {
    localStorage.removeItem("access_token");
    set((state) => ({ ...state, access_token: "", isLogged: false }));
  },
}));

export default useSessionStore;

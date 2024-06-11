import { create } from 'zustand';

import {
  initialSignupResponse,
  SignupResponse,
  SignupState,
} from '../types/signup.types';

const useSignupStore = create<SignupState>((set) => ({
  isSignupDialogOpen: false,
  signupResponse: initialSignupResponse,
  openSignupDialog: () => set({ isSignupDialogOpen: true }),
  closeSignupDialog: () => set({ isSignupDialogOpen: false }),

  setSignupResponse: async (response: SignupResponse) => {
    set({ signupResponse: response });
  },

  clearSignupResponse: async () => {
    set({
      signupResponse: {
        message: undefined,
        statusCode: undefined,
      },
    });
  },
}));
export default useSignupStore;

import { create } from 'zustand';

import { SignupState } from '../types/signup.types';

const useSignupStore = create<SignupState>((set) => ({
  isSignupDialogOpen: false,
  openSignupDialog: () => set({ isSignupDialogOpen: true }),
  closeSignupDialog: () => set({ isSignupDialogOpen: false }),
}));
export default useSignupStore;

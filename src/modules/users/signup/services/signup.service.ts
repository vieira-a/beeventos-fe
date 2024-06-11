import { API_URLS } from '@/shared/constans/api-urls';

import { SignupData } from '../types/signup.types';

export class SignupService {
  async signupAtendee(data: SignupData) {
    const signupAtendeeUrl = API_URLS.SIGNUP_ATENDEE;
    try {
      const response = await fetch(`${signupAtendeeUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response) {
        throw new Error('Erro ao tentar criar conta');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error('Erro ao tentar criar conta' + error);
    }
  }
}

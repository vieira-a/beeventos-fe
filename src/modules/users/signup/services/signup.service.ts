import { SignupData } from '../types/signup.types';

export class SignupService {
  async signupAtendee(data: SignupData) {
    //const signupAtendeeUrl = API_URLS.SIGNUP_ATENDEE;
    try {
      const response = await fetch(
        'https://beeventos-be-production.up.railway.app/api/v1/atendees/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

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

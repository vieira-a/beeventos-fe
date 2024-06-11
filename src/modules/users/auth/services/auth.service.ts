import { API_URLS } from '@/shared/constans/api-urls';

export class AuthService {
  async auth(email: string, password: string, loginRole: string) {
    let loginUserUrl: string = '';

    if (loginRole === 'user') {
      loginUserUrl = API_URLS.LOGIN_USER;
    } else if (loginRole === 'atendee') {
      loginUserUrl = API_URLS.LOGIN_ATENDEE;
    }

    try {
      const response = await fetch(`${loginUserUrl.toString()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response) {
        throw new Error('Erro na tentativa de login');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error('Erro na tentativa de login: ' + error);
    }
  }

  async readUserProfile(access_token: string) {
    const readUserProfileUrl = API_URLS.USER_PROFILE;

    try {
      const response = await fetch(`${readUserProfileUrl.toString()}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response) {
        throw new Error(
          'Erro na tentativa de obter dados do perfil de usuário',
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        'Erro na tentativa de obter dados do perfil de usuário: ' + error,
      );
    }
  }
}

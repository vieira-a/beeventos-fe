import { API_URLS } from '@/shared/constans/api-urls';

export class AuthService {
  async auth(email: string, password: string, loginRole: string) {
    let loginUserUrl: string = '';

    if (loginRole === 'user') {
      loginUserUrl = API_URLS.LOGIN_USER;
    } else if (loginRole === 'atendee') {
      loginUserUrl = API_URLS.LOGIN_ATENDEE;
    } else {
      throw new Error('Invalid login role');
    }

    try {
      const response = await fetch(`${loginUserUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(
          `Erro na tentativa de login: ${response.status} ${response.statusText}`,
        );
      }
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(
          `Erro na tentativa de login: Resposta não é JSON. Content-Type: ${contentType}`,
        );
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
      const response = await fetch(`${readUserProfileUrl}`, {
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

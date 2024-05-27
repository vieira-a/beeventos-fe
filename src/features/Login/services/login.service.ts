export class LoginService {
  async userLogin(email: string, password: string) {
    const loginUserUrl = process.env.API_LOGIN_USER_URL;

    try {
      const response = await fetch(`${loginUserUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response) {
        throw new Error("Erro na tentativa de login");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error("Erro na tentativa de login: " + error);
    }
  }
}

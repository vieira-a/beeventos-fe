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

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Falha na tentativa de login");
      } else {
        console.log(data.message);
      }

      return data;
    } catch (error) {
      throw new Error("Erro ao fazer login: " + error);
    }
  }
}

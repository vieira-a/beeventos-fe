export class LoginService {
  async userLogin(email: string, password: string, loginRole: string) {
    console.log("chega no login", loginRole);
    let loginUserUrl: string | undefined;

    if (loginRole === "user") {
      loginUserUrl = process.env.API_LOGIN_USER_URL;
      console.log("loginUserUrl > user? ", loginUserUrl);
    } else if (loginRole === "atendee") {
      loginUserUrl = process.env.API_LOGIN_ATENDEE_URL;
      console.log("loginUserUrl > atendee?: ", loginUserUrl);
    }

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

  async readUserProfile(access_token: string) {
    const readUserProfileUrl = process.env.API_USER_PROFILE_URL;

    try {
      const response = await fetch(`${readUserProfileUrl}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response) {
        throw new Error(
          "Erro na tentativa de obter dados do perfil de usuário"
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(
        "Erro na tentativa de obter dados do perfil de usuário: " + error
      );
    }
  }
}

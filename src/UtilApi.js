import axios from "axios";

class UtilApi {
  static async landingPage(token) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4444/api/profile/user",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const response = await axios(config);
    return response;
  }

  static getToken() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
      return "Bearer " + user.accessToken;
    } else {
      return null;
    }
  }

  static storeToken(token) {
    localStorage.setItem("user", JSON.stringify({ accessToken: token }));
  }

  static signUp(signupRequest) {
    return "a";
  }
}

export default UtilApi;

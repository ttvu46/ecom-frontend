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
    console.log(user);

    if (user && user.accessToken) {
      return "Bearer " + user.accessToken;
    } else {
      return null;
    }
  }

  static storeToken(token) {
    localStorage.setItem("user", JSON.stringify({ accessToken: token }));
  }

  static async signUp(signupRequest) {
    let config = {
      method: "post",
      url: "http://localhost:4444/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: signupRequest,
    };

    const response = await axios(config);
    return response;
  }

  static async signUp(signupRequest) {
    let config = {
      method: "post",
      url: "http://localhost:4444/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: signupRequest,
    };

    const response = await axios(config);
    return response;
  }

  static async signIn(signinRequest) {
    let config = {
      method: "post",
      url: "http://localhost:4444/api/auth/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: signinRequest,
    };

    const response = await axios(config);
    return response;
  }
}

export default UtilApi;

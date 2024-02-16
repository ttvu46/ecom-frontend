import axios from "axios";

const request_url = process.env.REACT_APP_URL;
class UtilApi {
  static async productList(token) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${request_url}/api/products`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    try {
      const response = await axios(config);
      return response.data;
    } catch (e) {
      throw new Error(e.response.status);
    }
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
      url: `${request_url}/api/auth/signup`,
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
      url: `${request_url}/api/auth/signup`,
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
      url: `${request_url}/api/auth/signin`,
      headers: {
        "Content-Type": "application/json",
      },
      data: signinRequest,
    };

    const response = await axios(config);
    return response;
  }

  static async getProductInfo(id, token) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${request_url}/api/products/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    try {
      const response = await axios(config);
      return response.data;
    } catch (e) {
      throw new Error(e.response.status);
    }
  }

  static getCartItemsNumber(token) {
    return 1; 
    // let config = {
    //   method: "get",
    //   maxBodyLength: Infinity,
    //   url: `${request_url}/api/products/${id}`,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: token,
    //   },
    // };
    // try {
    //   const response = await axios(config);
    //   return response.data;
    // } catch (e) {
    //   throw new Error(e.response.status);
    // }
  }
}

export default UtilApi;

import { http } from "./../utils";

export default {
  getCaptcha: () => {
    return http.get("/oauth/captcha");
  },
};

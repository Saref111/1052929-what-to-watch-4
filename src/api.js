import Axios from "axios";

const Error = {
  UNAUTHORIZED: 401
};

export const createApi = (onUnauthorized) => {
  const api = Axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED && response.config.url !== `/login`) {
      onUnauthorized();

      return err;
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

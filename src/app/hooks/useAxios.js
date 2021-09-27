import axiosHook from "axios-hooks";

const useAxios = (baseApiUrl, config) => {
  const baseURL = `${window.location.href}${baseApiUrl}`;
  return axiosHook({ baseURL, ...config });
};

export default useAxios;

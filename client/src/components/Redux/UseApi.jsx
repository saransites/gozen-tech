import axios from "axios";
import { useSelector } from "react-redux";

const useApi = () => {
  const apiUrl = useSelector((state) => state.data.apiUrl);
  const token = useSelector((state) => state.data.token);

  return axios.create({
    baseURL: apiUrl,
    timeout: 25000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default useApi;

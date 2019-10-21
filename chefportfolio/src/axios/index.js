import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://chefs-portfolio.herokuapp.com/"
  });
};
export default axiosWithAuth;
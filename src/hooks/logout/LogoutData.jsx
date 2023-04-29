import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useLogoutData() {
  const navigate = useNavigate();
  const logoutData = async () => {
    try {
      const response = await axios.post("https://openmarket.weniv.co.kr/accounts/logout/");
      localStorage.removeItem("Authorization");
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return [logoutData];
};

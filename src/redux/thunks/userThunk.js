import axios from "axios";
import { userLoginAction } from "../actions/actionCreators";
import jwtDecode from "jwt-decode";

const urlApi = process.env.REACT_APP_URL_API_NETWORKS;

export const userLoginActionThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${urlApi}users/login`, user);

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));

    localStorage.setItem("user", JSON.stringify({ token: token }));
  }
};

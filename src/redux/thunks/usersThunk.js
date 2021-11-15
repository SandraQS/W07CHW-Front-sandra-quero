import axios from "axios";
import { getUsersAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API_NETWORKS;

export const usersRedurerActionThunk = () => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const response = await axios.get(`${urlApi}profile`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (response.status === 200) {
    dispatch(getUsersAction(response.data));
  }
};

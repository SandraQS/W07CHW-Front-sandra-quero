import axios from "axios";
import { userCreateAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API_NETWORKS;

export const userCreateActionThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${urlApi}users/register`, user);

  if (response.status === 201) {
    dispatch(userCreateAction(response));
  }
};

import * as actions from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
};
const Imanager = (state = initialState, action) => {
  switch (action.type) {
    case actions.API_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.API_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case actions.API_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default Imanager;

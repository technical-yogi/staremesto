import { put, call } from "@redux-saga/core/effects";
import { apiSuccess,apiError} from "../action/index";
import axios from "axios";

export function* Imanager(action) {
  console.log(action,"saga is calling");
  let response = yield call(   
    axios.get,
    `rm/get/statement/`
  );
  try {
    if (response && response.data) {
      yield put(apiSuccess({ response: response.data }));
    } else {
      yield put(apiError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(apiError({ error: "Data not fetched" }));
  }
}
export default Imanager;
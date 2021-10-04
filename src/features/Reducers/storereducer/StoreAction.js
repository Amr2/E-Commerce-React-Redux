import { GetALLStoreData } from "../../../constants/api";

export const StoreData = () => async (dispatch) => {
  return dispatch({
    type: "Get_All_Store_Data",
    payload: { ...(await GetALLStoreData()) },
  });
};

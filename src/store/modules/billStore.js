import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { setBillList } = billStore.actions;

const getBills = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(res.data));
  };
};

export { getBills };
export default billStore.reducer;

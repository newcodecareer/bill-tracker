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
    addBillList(state,action) {
      state.billList.push(action.payload)
    }
  },
});

const { setBillList,addBillList } = billStore.actions;

const getBills = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(res.data));
  };
};
const addBills = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8888/ka",data);
    dispatch(addBillList(res.data));
  };
};

export { getBills, addBills };
export default billStore.reducer;

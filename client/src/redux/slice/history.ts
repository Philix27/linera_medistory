import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IHistory {
  sent_to: string;
  amount: string;
  time_sent: number;
}
interface IProps {
  items: Array<IHistory>;
}

const initialState: IProps = {
  items: [],
};

export const TransactionHistory = createSlice({
  name: "TRANS_HISTORY",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IHistory>) => {
      state.items.push(action.payload);
    },
    delete_ben: (state, action: PayloadAction<string>) => {
      const filteredArray = state.items.filter(
        (item) => item["time_sent"].toString() !== action.payload
      );
      state.items = filteredArray;
    },
  },
});

export const TransactionHistoryActions = TransactionHistory.actions;
export default TransactionHistory.reducer;

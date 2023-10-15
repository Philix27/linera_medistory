import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Beneficiary {
  name: string;
  id: string;
  address: string;
}
interface ISettings {
  isSidebarOpen: boolean;
  isDarkTheme: boolean;
  ben_list: Array<Beneficiary>;
  employ: string;
}

const initialState: ISettings = {
  isSidebarOpen: true,
  isDarkTheme: true,
  ben_list: [],
  employ: "opo",
};

export const Settings = createSlice({
  name: "SETTINGS",
  initialState,
  reducers: {
    sidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    theme: (state, action: PayloadAction<boolean>) => {
      state.isDarkTheme = !action.payload;
    },
    add_ben: (state, action: PayloadAction<Beneficiary>) => {
      // state.ben_list = [...tt, action.payload];
      state.ben_list.push(action.payload);
    },
    delete_ben: (state, action: PayloadAction<string>) => {
      const filteredArray = state.ben_list.filter(
        (item) => item["id"] !== action.payload
      );
      state.ben_list = filteredArray;
    },
  },
});

export const SettingsActions = Settings.actions;
const SettingsReducer = Settings.actions;
export default Settings.reducer;

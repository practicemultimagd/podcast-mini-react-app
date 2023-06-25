import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

const initialState = {
  query: "",
};

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { updateQuery } = podcastSlice.actions;

export const selectPodcast = (state: RootState) => state.podcast;

export default podcastSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LocationState {
  isLoading: boolean;
}

const initialState: LocationState = {
  isLoading: false,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locationLoadingChange: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { locationLoadingChange } = locationSlice.actions;

export const selectLocation = (state: RootState) => state.location;

export default locationSlice.reducer;

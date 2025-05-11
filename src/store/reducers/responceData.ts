import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Space {
  name: string;
  address: string;
  image: string;
  dayPrice: number;
  bulkPrice: number;
  bulkDays: number;
  discount: number;
  distance: string;
}

const initialState: {
  responceData: Space[];
} = {
  responceData: [
    {
      name: 'HSR Sector 6, Service Road',
      address: 'Service Road',
      image: '/assets/image_1.jpg',
      dayPrice: 249,
      bulkPrice: 2400,
      bulkDays: 10,
      discount: 20,
      distance: '6 Kms',
    },
    {
      name: 'HSR Sector 6, Service Road',
      address: 'Service Road',
      image: '/assets/image_2.jpg',
      dayPrice: 259,
      bulkPrice: 2450,
      bulkDays: 10,
      discount: 15,
      distance: '6 Kms',
    },
    {
      name: 'HSR Sector -6, 5th main Road',
      address: '5th main Road',
      image: '/assets/image_1.jpg',
      dayPrice: 269,
      bulkPrice: 2500,
      bulkDays: 10,
      discount: 10,
      distance: '6 Kms',
    },
    {
      name: 'HSR Sector -2, 27th main Road',
      address: '27th Main',
      image: '/assets/image_4.jpg',
      dayPrice: 279,
      bulkPrice: 2550,
      bulkDays: 10,
      discount: 25,
      distance: '6 Kms',
    },
    {
      name: 'HSR Sector 6, Service Road',
      address: '19th Main',
      image: '/assets/image_5.jpg',
      dayPrice: 289,
      bulkPrice: 2600,
      bulkDays: 10,
      discount: 18,
      distance: '6 Kms',
    },
    {
      name: 'HSR Sector -6, 5th main Road',
      address: '14th Main',
      image: '/assets/image_5.jpg',
      dayPrice: 299,
      bulkPrice: 2650,
      bulkDays: 10,
      discount: 12,
      distance: '6 Kms',
    },
  ],
};

export const responceData = createSlice({
  name: 'responceData',
  initialState,
  reducers: {
    responceDatas: (state, action: PayloadAction<Space[]>) => {
      state.responceData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { responceDatas } = responceData.actions;

export default responceData.reducer;

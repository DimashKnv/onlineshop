import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "favSlice",
  initialState: { fav: [] },
  reducers: {
    addFav: (state, action) => {
      console.log(action);
      state.fav.push(action.payload);
    },
    removeFav:(state,action)=>{
        state.fav=state.fav.filter((object)=>object.id!=action.payload.id)

    }
  },
});

export const { addFav,removeFav } = favSlice.actions;

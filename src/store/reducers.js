import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "favSlice",
  initialState: { fav: [] },
  reducers: {
    addFav: (state, action) => {
      state.fav.push(action.payload);
    },
    removeFav:(state,action)=>{
        state.fav=state.fav.filter((object)=>object.id!=action.payload.id)
    }
  },
});

export const cartSlice= createSlice({
  name:"cartSlice",
  initialState:{cart:[]},
  reducers:{
    addCart:(state,action)=>{
      state.cart.push(action.payload);
    },
    removeCart:(state,action)=>{
      state.cart=state.cart.filter((object)=>object.id!=action.payload.id)
    }
  }
}
)
export const {addCart,removeCart} = cartSlice.actions;

export const { addFav,removeFav } = favSlice.actions;

import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCartItem(state, action) {
      state.push(action.payload)
    },
    removeCartItem(state, action) {
      return state.fillter((item,index) => index !== action.payload);
    }
  }
})

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;










// import { ADD_TO_CART } from "./constants";

// const initialState = [];


// export const reducer = (state = initialState, action)=>{
//     switch(action.type){
//         case ADD_TO_CART:
//             return [
//                 ...state,
//                 action.state
//             ]
//         default:
//             return state;
//     }
// }
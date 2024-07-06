import { createSlice } from "@reduxjs/toolkit";


//Colors is MarkUp

const initialState = {
    gray:true,
}

const colorsReducer = createSlice({
    name:'colors',
    initialState,
    reducers:{
      grayColor: (state, action) => {
        const { red, blue, yellow, gray } = action.payload;
        state.red = red;
        state.blue = blue;
        state.yellow = yellow;
        state.gray = gray;
      },
    },
  });

export const {redColor , grayColor , yellowColor , blueColor} = colorsReducer.actions ;

export default colorsReducer.reducer ;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const selectedItem = state.cart.find(item => item._id === action.payload._id);
            if(selectedItem){
                selectedItem.quantity += 1;
                state.cart = state.cart.filter(item => item._id !== selectedItem._id);
                state.cart.push(selectedItem);
            }else{
                state.cart.push({...action.payload, quantity:1, position: state.cart.length});
            }
        },

        removeFromCart:(state, action)=>{
            const selectedItem = state.cart.find(item => item._id === action.payload);
            if(selectedItem.quantity > 1){
                selectedItem.quantity -= 1;
            }else{
                state.cart = state.cart.filter(item => item._id !== action.payload)
            }
        },

        clearCart:(state, action)=>{
            state.cart = []
        }
    }
})


export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer
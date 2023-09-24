import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : 'cart',
    initialState :{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state) =>{
            state.items = []
        },
        removeItem:(state, action) =>{
            for(let i = 0; i<state.items.length; i++){
                if(state.items[i].id === action.payload){
                    state.items.splice(i, 1);
                    break;
                }
            }
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;


export default cartSlice.reducer


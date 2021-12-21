import { createSlice } from '@reduxjs/toolkit'

const CART_LIST_KEY = "cartListKey"
const initialState = JSON.parse(localStorage.getItem(CART_LIST_KEY)) || []

const findItem = (state, id) => state.findIndex(item => item.id === id)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdded(state, action) {
            const canAdd = findItem(state, action.payload.id)
            if (canAdd === -1) {
                let item = { ...action.payload, quantity: 1 }
                state.push(item)
                localStorage.setItem(CART_LIST_KEY, JSON.stringify(state))
            }
        },
        changQuantity(state, action) {
            let indexItem = findItem(state, action.payload.id)
            if (indexItem !== -1) {
                let item = state[indexItem]
                item = { ...item, quantity: item.quantity = action.payload.quantity }
                state[indexItem] = item
                localStorage.setItem(CART_LIST_KEY, JSON.stringify(state))
                return state
            }
        },
        deleteItem(state, action) {
            let indexItem = findItem(state, action.payload)
            state.splice(indexItem, 1)
            localStorage.setItem(CART_LIST_KEY, JSON.stringify(state))
            return state
        }
    }
})

export const { cartAdded, changQuantity, deleteItem } = cartSlice.actions

export default cartSlice.reducer
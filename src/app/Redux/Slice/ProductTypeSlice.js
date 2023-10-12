import { createSlice } from "@reduxjs/toolkit"


const ProductTypeSlice = createSlice({
    name: "load",
    initialState: "",
    reducers: {
        ProTypeRed(state, action) {
            return String(action.payload)
        }
    }
})
export default ProductTypeSlice.reducer
export const { ProTypeRed } = ProductTypeSlice.actions
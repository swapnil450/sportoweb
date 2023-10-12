import { createSlice } from "@reduxjs/toolkit"


const LoadMoreSlice = createSlice({
    name: "load",
    initialState: 16,
    reducers: {
        setLastIndex(state, action) {
            return Number(action.payload) + 8
        }
    }
})
export default LoadMoreSlice.reducer
export const { setLastIndex } = LoadMoreSlice.actions
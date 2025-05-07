import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counterValue: 0,
    show: true,
}

const counterSlice = createSlice({
    initialState: initialCounterState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.counterValue += 1;
        },
        decrement: (state) => {
            state.counterValue -= 1;
        },
        togle: (state) => {
            state.show = !state.show;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';

import counterSliceReducer from './counter-slice';

const store = configureStore({
    reducer: {counter: counterSliceReducer}
})

// const storeReducerFunction = (actualState = initialState, actions) => {

//     if(actions.type === 'increment') {
//         return {
//             counter: actualState.counter + 1,
//         };
//     }
    
//     if(actions.type === 'decrement') {
//         return {
//             counter: actualState.counter - 1,
//         };
//     }

//     return actualState;
// };

// const store = createStore(storeReducerFunction);

export default store;
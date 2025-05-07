
import { configureStore } from '@reduxjs/toolkit';

import counterSliceReducer from './counter-slice';
import userSliceReducer from './user-slice';

const store = configureStore({
    reducer: {counter: counterSliceReducer, user: userSliceReducer}
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
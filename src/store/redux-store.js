import { createStore } from 'redux';

const initialState = {
    counter: 0,
}

const storeReducerFunction = (actualState = initialState, actions) => {

    if(actions.type === 'increment') {
        return {
            counter: actualState.counter + 1,
        };
    }
    
    if(actions.type === 'decrement') {
        return {
            counter: actualState.counter - 1,
        };
    }

    return actualState;
};

const store = createStore(storeReducerFunction);

export default store;
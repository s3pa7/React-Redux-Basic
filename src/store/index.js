/*import { createStore , combinateReducers} from 'redux';*/

import { configureStore} from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './auth';

/*
THIS IS FOR REDUX
const counterReducer = (state = initialState, action) => {


    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }

    }
    if(action.type === 'increase'){
        return {
            counter: state.counter  + action.amount,
            showCounter: state.showCounter
        }

    }


    if(action.type === 'decrement'){
        return {
            counter: state.counter  - 1,
            showCounter: state.showCounter
         }

    }
    if(action.type === 'toggle'){
        return {
            showCounter: !state.showCounter,
            counter:state.counter
        }

    }

    return state;
}

// for multiple reducers -> combinateReducers  hooks
const store  = createStore(counterReducer);*/


// configureStorm with multiple redusers
/*const store  = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    }
});*/
// with 1 store toolkid
/*const store = configureStore({
    reducer:counterSlice.reducer,
});*/
const store  = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    }
})


export default store;


//immer
import {createStore, combineReducers} from 'redux';

import textChangeReducer from '../reducers/textChangeReducer';

const rootReducer = combineReducers(
    {text: textChangeReducer}
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
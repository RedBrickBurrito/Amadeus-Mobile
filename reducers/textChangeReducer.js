import {TEXT_CHANGE} from '../constants';

const initialSate = {
    text: ""
};

const textChangeReducer = (state = initialSate, action) => {
    switch(action.type) {
        case TEXT_CHANGE:
            return {
                ...state,
                text:action.payload
            };
        default:
            return state;
    }
}

export default textChangeReducer;
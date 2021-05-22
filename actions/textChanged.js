import {TEXT_CHANGE} from '../constants';

export function changeText(message) {
    return {
        type: TEXT_CHANGE,
        payload: message
    }
}
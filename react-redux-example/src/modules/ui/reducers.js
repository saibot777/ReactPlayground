import { handleAction, combineActions } from 'redux-actions';

import {
    RECEIVE_ADD_ITEM,
    receiveAddItem
} from './actions';

const defaultState = {
    items: []
};

const receiveItems = (state, action) => {
    let newState = {
        ...state
    };
    newState.items = [].concat(newState.items);
    if (Array.isArray(action.payload)) {
        newState.items = newState.items.concat(action.payload);
    } else {
        newState.items.push(action.payload);
    }
}

const requestItems = (state, action) => {
    let newState = {
        ...state
    };
    newState.itemsError = action.payload;
    return newState;
}

export const ui = handleAction(
    combineActions({
        receiveAddItem
    }),
    {
        next(state, action) {
            switch (action.type) {
                case RECEIVE_ADD_ITEM: return receiveItems(state, action);
                default:
                    return state;
            }
        },
        throw(state, action) {
           switch (action.type) {
               case RECEIVE_ADD_ITEM: return requestItems(state, action);
               default:
                    return state;
           } 
        }
    }
)
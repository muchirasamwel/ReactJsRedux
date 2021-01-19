import {ADD_ITEM, DELETE_ITEM} from '../constants/index'

let initialState = {
    items: []
};

export function itemReducer(state = initialState, action) {
    let type = action.type;
    switch (type) {
        case ADD_ITEM:
            Object.assign({}, state, {
                items: state.items.push(action.payload)
            });
            break;
        case DELETE_ITEM:
            Object.assign({}, state, {
                items: state.items.splice(state.items.indexOf(action.payload), 1)
            });
            break;
        default:
            return state

    }
    return state;
}

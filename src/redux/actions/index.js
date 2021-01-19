import {ADD_ITEM, DELETE_ITEM} from '../constants/index'

export function AddItem(item) {
    // can call api here.
    return {type: ADD_ITEM, payload: item}
}

export function DeleteItem(item) {
    return {type: DELETE_ITEM, payload: item}
}

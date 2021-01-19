import {itemReducer} from "../reducers/index";
import {createStore} from 'redux'

export default createStore(itemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


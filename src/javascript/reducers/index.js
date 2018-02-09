import {combineReducers} from 'redux';
import data from './data';
import dialog from './dialog';

const reducer = combineReducers({
    data,
    dialog
});

export default reducer

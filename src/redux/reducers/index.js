import { combineReducers } from 'redux';

import isDraw from './DrawForm'
import itemReducer from './itemReducer';
import isEdit from './Deleted'
import isChange from './Change'

const rootReducer = combineReducers({
    isDraw,
    itemReducer,
    isEdit,
    isChange
})



export default rootReducer;
import { CounterReducer } from './CounterReducer'
import {AddTextReducer} from './AddTextReducer'
import {combineReducers} from 'redux';

const AllReducers = combineReducers({
    counter: CounterReducer,
    text: AddTextReducer,
})

export default AllReducers
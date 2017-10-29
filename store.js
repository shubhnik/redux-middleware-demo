import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import dummyMiddleware from './dummymiddleware'

const store = createStore(reducer, applyMiddleware(dummyMiddleware));

export default store
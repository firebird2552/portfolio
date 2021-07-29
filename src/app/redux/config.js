import { applyMiddleware, createStore, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import RootReducer from './reducers/Root.reducer'
const sagaMiddleware = createSagaMiddleware()
const middleware = [logger, sagaMiddleware]



export const store = createStore(RootReducer, applyMiddleware(...middleware))
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const storeRedux = createStore(rootReducer, applyMiddleware(thunk));

export default storeRedux;

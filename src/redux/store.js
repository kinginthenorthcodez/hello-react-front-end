import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageReducer from './messageReducer';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(messageReducer, composeEnhancers);

export default store;

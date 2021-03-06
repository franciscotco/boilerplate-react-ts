// Vendors
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Reducers
import { reducer as lang } from './lang';

const reducers = combineReducers({
	lang
});

const store = applyMiddleware(thunk)(createStore)(reducers);

export default store;

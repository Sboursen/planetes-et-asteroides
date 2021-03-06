import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import getBodiesReducer from './home/Home';
import getBodyReducer from './details/Details';
import searchBodiesReducer from './search/Search';

const rootReducer = combineReducers({
  bodies: getBodiesReducer,
  body: getBodyReducer,
  search: searchBodiesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

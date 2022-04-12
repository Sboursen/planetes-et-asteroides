import {
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import getBodiesReducer from './home/Home';

const rootReducer = combineReducers({
  getBodies: getBodiesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

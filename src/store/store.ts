import { applyMiddleware , createStore , compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import rootReducers from './reducers';
import rootEffects from './effects';

const composeEnhancer = globalThis.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk, epicMiddleware)));
epicMiddleware.run(rootEffects);

export default store;





import {  createStore,applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// import { RootReducer } from './rootReducer';
import rootReducer from './rootReducer';

const middleware = [thunk];



export const store: Store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;
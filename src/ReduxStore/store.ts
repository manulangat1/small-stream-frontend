import {  createStore,applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// import { RootReducer } from './rootReducer';
import rootReducer from './rootReducer';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
const middleware = [thunk,loadingBarMiddleware()];



export const store: Store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;
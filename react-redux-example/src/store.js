import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(sagaMiddleware);



let composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

export default createStore( rootReducer, {}, composeEnhancers(middleware));

sagaMiddleware.run(rootSaga);
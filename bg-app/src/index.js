import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burger.reducer';
import orderReducer from './store/reducers/order.reducer';
import authReducer from './store/reducers/auth.reducer';

const composeEnhancers = process.env.NODE_ENV === 'development' 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    : null
    || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxThunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>    
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

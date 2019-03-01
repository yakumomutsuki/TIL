import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import {store} from './store'
import App from './containers/App'

const renderApp = (store) => {
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )
};

store.subscribe(() => renderApp(store));
renderApp(store);
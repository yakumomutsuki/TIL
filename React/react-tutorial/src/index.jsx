import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import {Route} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import App from './containers/App'
import {createBrowserHistory} from 'history'
import {createStore} from './store'
import Error from './components/Error'

const history = createBrowserHistory();
const store = createStore(history);

const renderApp = (store) => {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/error" component={Error}/>
                </div>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
};

store.subscribe(() => renderApp(store));
renderApp(store);
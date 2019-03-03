import {
    createStore as reduxCreateStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import {routerMiddleware, connectRouter} from 'connected-react-router'
import {taskReducer} from "./reducers/tasks";

const reducer = (history) => combineReducers({
    router: connectRouter(history),
    reducers : taskReducer
});

export const createStore = (history) => {
    return reduxCreateStore(
        reducer(history),
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    )
};


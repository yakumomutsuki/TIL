import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'

const initialState = {
    task: '',
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        default :
            return state;
    }
};

const store = createStore(
    taskReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
});

const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
});

const App = ({store}) => {
    const {task, tasks} = store.getState();
    return (
        <div>
            <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))}/>
            <input type="button" onClick={() => store.dispatch(addTask(task))}/>
        </div>
    )
};

const renderApp = (store) => {
    render(
        <App store={store}/>,
        document.getElementById('root')
    )
};

store.subscribe(() => renderApp(store));
renderApp(store);
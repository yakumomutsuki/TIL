import React from 'react'
import {inputTask,addTask} from '../actions/tasks'

const App = ({store}) => {
    const {task, tasks} = store.getState();
    return (
        <div>
            <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))}/>
            <input type="button" onClick={() => store.dispatch(addTask(task))}/>
        </div>
    )
};

export default App;
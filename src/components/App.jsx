import React from 'react'

const App = ({task, tasks, inputTask, addTask}) => {
    return (
        <div>
            <input type="text" onChange={(e) => inputTask(e.target.value)}/>
            <input type="button" onClick={() => addTask(task)}/>
        </div>
    )
};

export default App;
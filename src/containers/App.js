import {connect
} from 'react-redux'
import App from '../components/App.jsx'
import {addTask,inputTask} from '../actions/tasks'

const mapStateToProps = ({ task, tasks }) => {
    return {
        task,
        tasks
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addTask(task){
            dispatch(addTask(task))
        },
        inputTask(task){
            dispatch(inputTask(task))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
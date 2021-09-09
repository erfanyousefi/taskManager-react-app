import { useHistory } from "react-router-dom";
import NewTodoForm from "./../../components/Todos/NewTodoForm"
function NewTask(){
    const history = useHistory()
    function addTaskData(Data){
        fetch('https://todo-react-app-ba70f-default-rtdb.firebaseio.com/todo.json', {
            method : 'POST',
            body : JSON.stringify(Data),
            headers : {
                'Content-type' : 'application/json'
            }
        }).then(doc => {
            if(doc.status === 200){
                history.replace("/all-tasks")
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <h1 className="text-4xl">Create New Task</h1>
            <hr/>
            <NewTodoForm addNewTask={addTaskData} />
        </div>
    )
}

export default NewTask
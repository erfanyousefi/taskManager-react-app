import TodoList from "./../../components/Todos/TodoList"
import { useState, useEffect } from "react";
const TodoData = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
function AllTasks() {
    const [isLoading, setIsLoading] = useState(true)
    const [taskList, setTaskList] = useState([]);
    useEffect(() => {
        fetch('https://todo-react-app-ba70f-default-rtdb.firebaseio.com/todo.json')
            .then(response => { return response.json() })
            .then(data => {
                const Todos = [];
                console.log(data);
                for (const key in data) {
                    const todo = {
                        id : key,
                        ...data[key]
                    }
                    Todos.push(todo)
                }
                console.log(Todos);
                setIsLoading(false)
                setTaskList(Todos)
            })
            .catch(err => console.log(err))
    }, [])
    if (isLoading) {
        return <p>Loading ...</p>
    } else {
        return (
            <div>
                <h1 className="text-4xl">All Tasks</h1>
                <hr />
                <TodoList todoList={[...taskList]} />
            </div>
        )
    }
}

export default AllTasks
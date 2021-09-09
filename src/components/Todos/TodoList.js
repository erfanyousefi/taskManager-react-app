import Todo from "./Todo"
function TodoList(props) {
    return (
        <div>
            {props.todoList.map((todo, index) => <Todo todo={todo} key={index}/>)}
        </div>
    )
}

export default TodoList
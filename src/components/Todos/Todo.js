// import logo from 'src/logo.svg';
import Modal from "../Modal"
import { useState, useContext } from "react"
import {FavoritesTasksContext} from "./../../store/favorites-task"
function Todo(props) {
    const taskCtx = useContext(FavoritesTasksContext);
    const [IsOpenModal, setOpenModal] = useState(false)

    function showModal() {
        setOpenModal(true)
    }
    function closeModal() {
        
    }
    function toggleFavoritesTask() {
        if (taskCtx.existItem(props.todo.id)) {
            taskCtx.removeItem(props.todo.id)
        } else {
            taskCtx.addItem(props.todo)
        }
    }
    return (
        <div key={props.todo.id}>
            <div className="p-4 max-w-sm my-3 mx-auto bg-white rounded-xl shadow-md flex items-center justify-between space-x-2">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full p-0 bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <div className=" text-red-600 p-0">
                        <img className="w-full h-full rounded-full" src={props.todo.image} />
                    </div>
                </div>
                <div>
                    <div className="text-xl text-left font-medium text-black">{props.todo.title}</div>
                    <p className="text-gray-500 text-left">{props.todo.text}!</p>
                </div>
                <div className="text-right max-w-max">
                    <button className="btn btn-blue text-sm p-0 items-end justify-items-end"
                        onClick={toggleFavoritesTask}>
                        {taskCtx.existItem(props.todo.id) ? 'Remove From Favorite' : 'Add To Favorite'}
                    </button>
                </div>
            </div>
            {IsOpenModal && <Modal onCancel={closeModal} onConfirm={closeModal} property={{ btnText: 'Delete', class: 'btn btn-red mx-2', title: "Delete Task", text: 'Are You want to Delete This Task ?' }} />}
        </div >
    )
}
export default Todo
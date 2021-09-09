import { useRef } from "react"
function NewTodoForm(props) {
    const titleRef = useRef();
    const textRef = useRef();
    const imageRef = useRef();
    function SaveTaskData(event) {
        event.preventDefault(props);
        const FormData = {
            title : titleRef.current.value,
            text : textRef.current.value,
            image : imageRef.current.value
        }
        props.addNewTask(FormData);
    }
    return (
        <div className="flex items-center mt-5 w-full bg-teal-lighter ">
            <div className="w-full bg-white rounded shadow-lg p-8 md:max-w-sm md:mx-auto">
                <h1 className="block w-full text-center text-gray-700">Create New Task</h1>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post" onSubmit={SaveTaskData}>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-gray-700" htmlFor="title">Title</label>
                        <input className="border py-2 px-3 text-gray-600" type="text" id="title" ref={titleRef} />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-gray-700" htmlFor="title">Image-URL</label>
                        <input className="border py-2 px-3 text-gray-600" type="url" id="image" ref={imageRef} />
                    </div>
                    <div className="flex flex-col mb-6 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-gray-700" htmlFor="text">Text (Description)</label>
                        <textarea id="text" ref={textRef} className="shadow-lg border p-2 focus:outline-none" placeholder="typing ..."></textarea>
                    </div>
                    <button className="block btn-blue hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewTodoForm
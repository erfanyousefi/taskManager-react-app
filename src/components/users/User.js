// import logo from 'src/logo.svg';
import Modal from "../Modal"
import { useState } from "react"
function User(props) {
    const [IsOpenModal, setOpenModal] = useState(false)
    function showModal() {
        setOpenModal(true)
    }
    function closeModal() {
        setOpenModal(false)
    }
    return (
        <div key={props.key}>
            <div className="p-4 max-w-sm my-3 mx-auto bg-white rounded-xl shadow-md flex items-center justify-between space-x-2">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full p-0 bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <div className=" text-red-600 p-0">
                        <img className="w-full h-full rounded-full" src={props.user.image} />
                    </div>
                </div>
                <div>
                    <div className="text-xl text-left font-medium text-black">{props.user.name}</div>
                    <p className="text-gray-500 text-left">{props.user.email}!</p>
                </div>
                <div className="text-right max-w-max">
                    <button className="btn btn-blue items-end justify-items-end" onClick={showModal}>info</button>
                </div>
            </div>
            {IsOpenModal && <Modal onCancel={closeModal} onConfirm={closeModal} property={{ btnText: 'Ok', class: 'btn btn-blue mx-2', title: props.user.name, text: props.user.email }} />}
        </div >
    )
}
export default User
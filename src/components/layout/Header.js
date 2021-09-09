import { Link } from "react-router-dom"
function Header() {
    return (
        <div>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="#">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <to stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">

                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Home
                            </Link>
                            <Link to="/users" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Users
                            </Link>
                            <Link to="/new-task" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                New Task
                            </Link>
                            <Link to="/all-tasks" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                All Tasks
                            </Link>
                            <Link to="/about-us" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                About-us
                            </Link>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                            </Link>
                            <Link to="/signup" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
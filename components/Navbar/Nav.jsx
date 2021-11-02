import {useState} from "react"
import {MenuIcon} from '@heroicons/react/solid'

export default function NavBar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="sticky z-50 shadow-md w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white-900">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-pink" href="#pablo">
                            Logo
                        </a>
                        <button className="text-pink cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button"
                            onClick={
                                () => setOpen(!open)
                        }>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={
                            "lg:flex flex-grow items-center" + (
                            open ? " flex" : " hidden"
                        )
                        }
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink hover:opacity-75" href="#pablo">
                                    <i className="fab fa-facebook-square text-lg leading-lg text-pink opacity-75"></i>
                                    <span className="ml-2">About Me</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink hover:opacity-75" href="#pablo">
                                    <i className="fab fa-twitter text-lg leading-lg text-pink opacity-75"></i>
                                    <span className="ml-2">Projects</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-pink hover:opacity-75" href="#pablo">
                                    <i className="fab fa-pinterest text-lg leading-lg text-pink opacity-75"></i>
                                    <span className="ml-2">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

import NavBar from '../Navbar/Nav';

export default function Layout({children}) {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="flex flex-col flex-auto w-px">
                <NavBar/>
                <div className="w-full flex-auto lg:mb-0 b-10 overflow-auto">
                    {children}
                </div>
            </div>
        </div>

    )
}

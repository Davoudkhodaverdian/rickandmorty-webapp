import { useState } from "react";
import { Outlet } from "react-router-dom"
import { Link } from 'react-router-dom';
import DrawerMui from "./draverMui";

const Layout = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true) };

    return (
        <div>
            <div className="bg-slate-200 shadow flex flex-row-reverse md:flex-row justify-between">

                <Link className="p-3 pt-3" to={``}><span>rick and morty web application</span></Link>
                <div className="hidden md:block rounded p-3">
                    <Link className="p-3" to={``}> <span>home</span></Link>
                    <Link className="p-3" to={`locations`}><span>locations</span></Link>
                    <Link className="p-3" to={`episodes`}><span>locations</span></Link>
                </div>
                <div className="block md:hidden cursor-pointer transition-all ">
                    <DrawerMui open={open} setOpen={setOpen} />
                    <div className="overflow-hidden"  onClick={handleOpen}>
                        <div className="space-y-2 p-3 hover:scale-105">
                            <span className="block w-8 h-0.5 rounded bg-purple-600 "></span>
                            <span className="block w-8 h-0.5 rounded bg-purple-600 "></span>
                            <span className="block w-5 h-0.5 rounded bg-purple-600 "></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-6 ">
                <Outlet />
            </div>
            <div>
                <div className="p-10 bg-slate-200  shadow flex  justify-center">
                    <div>
                        <a href="https://en.wikipedia.org/wiki/Rick_and_Morty">Rick and Morty wikipedia</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Layout;
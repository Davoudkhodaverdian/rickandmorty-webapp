import { Outlet } from "react-router-dom"
import { Link } from 'react-router-dom';

const Layout = () => {

    return (
        <div>
            <div className="p-3 bg-slate-200 shadow flex justify-between">
                <div>
                    <Link className="p-3" to={``}>rick and morty web application</Link>
                </div>
                <div>
                    <Link className="p-3" to={``}>home</Link>
                    <Link className="p-3" to={`locations`}>locations</Link>
                    <Link className="p-3" to={`episodes`}>episodes</Link>
                </div>
            </div>
            <div className="m-6 ">
                <Outlet />
            </div>
        </div>

    )
}

export default Layout;
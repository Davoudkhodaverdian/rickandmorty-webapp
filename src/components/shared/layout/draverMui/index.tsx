import { SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    open: boolean
}

const DrawerMui: React.FC<Props> = ({ setOpen, open }) => {

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setOpen(open);
            };


    return (
        <SwipeableDrawer
            className="block md:hidden "
            anchor={"left"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <div className="bg-slate-200 h-full">
                <button onClick={toggleDrawer(false)} type="button" className="p-3 w-full text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="rounded py-3 flex flex-col">
                    <Link className="p-3 px-6" to={``}> <span>home</span></Link>
                    <Link className="p-3 px-6" to={`locations`}><span>locations</span></Link>
                    <Link className="p-3 px-6" to={`episodes`}><span>locations</span></Link>
                </div>
            </div>
        </SwipeableDrawer>
    )
}

export default DrawerMui;
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {


    const [open,setOpen] = useState(false)

    const routes = [
        {id:1 , path:'/', name: 'Home' },
        {id:2 , path:'/about', name: 'About' },
        {id:3 , path:'/services', name: 'Services' },
        {id:4 , path:'/contact', name: 'HomContact' },
        {id:5 , path:'*', name: 'NotFound' },
    ]

    return (
        <nav>
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open ===  true? <AiOutlineClose className="text-2xl "></AiOutlineClose> :
                     <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
                }
            {/* <AiOutlineMenu className="text-2xl "></AiOutlineMenu> */}
            </div>
            <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import {
   FaBars,FaEdit,FaDatabase,FaLaptop
}from "react-icons/fa";

import {MdAddBox} from "react-icons/md"
import {IoMdPlay} from "react-icons/io"
import {AiOutlineProfile} from "react-icons/ai"
// import {BsDatabaseFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    useEffect(()=>{
        document.addEventListener("mousedown",(event)=>{
            setIsOpen(false);
        })
    });
    const menuItem=[
        {
            path:"/",
            name:"Create TestSuit",
            icon:<MdAddBox/>
        },
        {
            path:"/about",
            name:"Modify Testsuit",
            icon:<FaEdit/>
        },
        {
            path:"/analytics",
            name:"Run Testsuit",
            icon:<IoMdPlay/>
        },
        {
            path:"/comment",
            name:"Throughput",
            icon:<FaDatabase/>
        },
        {
            path:"/product",
            name:"Config Profile",
            icon:<AiOutlineProfile/>
        },
        {
            path:"/productList",
            name:"Config Device",
            icon:<FaLaptop/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
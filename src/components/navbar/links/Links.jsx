"use client"
import { useState } from "react";
import style from "./link.module.css"
import NavLink from "./navLink/navLink";
const Links =()=>{
    const[open,setOpen] = useState(false);
    const Links=[
        {
        title:"Homepage",
        path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
        {
            title:"Blog",
            path:"/blog",
        },
    ];
    //TEMPRAY
    const session =true
    const isAdmin=false
    return(
        <div className={style.container}>
        <div className={style.links}>
            {Links.map((link=>(
                <NavLink item={link}  key={link.title}/>
                
            )))}{
                session ? (
                    <>
                    {isAdmin && (<NavLink item={{title:"Admin",path:"/admin"}} /> )}
                    <button className={style.logout}>Logout</button>
                    </>

                    ):(
                        <NavLink item={{title:"Login",path:"/login"}}/>
                    )
            }
        </div>
        <button className={style.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
        {
            open && <div className={style.mobileLinks}>
                {Links.map((link)=>(
                  <NavLink item={link} key={link.title}/>  
                ))}
            </div>
        }
        </div>
    );
};
export default Links;
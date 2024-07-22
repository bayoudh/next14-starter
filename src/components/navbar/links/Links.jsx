"use client"
import { useState } from "react";
import style from "./link.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
const Links =({session})=>{
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

    const isAdmin=false
    return(
        <div className={style.container}>
        <div className={style.links}>
            {Links.map((link=>(
                <NavLink item={link}  key={link.title}/>
                
            )))}{
                session?.user ? (
                    <>
                    {session.user?.isAdmin && (<NavLink item={{title:"Admin",path:"/admin"}} /> )}
                    <form action={handleLogout}>
                     <button className={style.logout}>Logout</button>
                    </form>
                    </>

                    ):(
                        <NavLink item={{title:"Login",path:"/login"}}/>
                    )
            }
                
        </div>
      
        <Image src="/menu.png" className={style.menuButton}  alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)}/>
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
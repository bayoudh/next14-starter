import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";
//fetch with api
/*const getData = async (userid) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}` ,{cache:"no-store"});
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};*/
const PostUser = async ({ userid })=>{
    //fetch data an api
    //const user = await getData(userid);
    const user= await getUser(userid)
    
    return(
        
       <div className={styles.container}>
                           <Image 
                            width={50} 
                            height={50} 
                            src={user?.img ? user.img: "/noavatar.png"}
                            alt="" 
                            className={styles.avatar} 
                        />
                        <div className={styles.texts}>
                            <span className={styles.title}>Author</span>
                            <span className={styles.username}>{user?.username ?? "Unknown"}</span>
                        </div>
        </div>
      
    )
}
export default PostUser;
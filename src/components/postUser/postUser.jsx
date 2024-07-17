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
                        <span className={styles.title}>{user.name}</span>
                        <span className={styles.username}>{user.username}</span>
        </div>
    )
}
export default PostUser;
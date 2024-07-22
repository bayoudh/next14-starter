import { getUsers } from "@/lib/data";
import styles from './adminUsers.module.css';
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () =>{
    const users = await getUsers();
    return (
        <div className={styles.conatiner}>
            <h1>Users</h1>
            { users.map((user)=>(
                <div className={styles.user} key={user.id}>
                    <div className={styles.detail}>
                        <Image
                        src={user.img || "/noAvatar.png"}
                        alt="user"
                        width={50}
                        height={50}
                        />
                        <span>{user.username}</span>
                                <span style={{ color: user.isAdmin ? 'green' : 'red' }}>
                                        {user.isAdmin ? 'Admin' : 'Not Admin'}
                                 </span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id}/>
                        <button className={styles.userButton}>Delete</button>
                    </form>

                </div>
            ))}
        </div>
    );
};
export default AdminUsers;
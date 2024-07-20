import { handleGithubLogin } from "@/lib/acton";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";
import Image from "next/image";
 const LoginPage =()=>{
    
    
    return(
        <div className={styles.container}>
        <div className={styles.wrapper}>
          <form action={handleGithubLogin}className={styles.github}>
            <button className={styles.github}>Login with Github<Image src="/github.png" width={15} height={15}/></button>
          </form>
         <LoginForm/>
        </div>
      </div>
    );
 }
 export default LoginPage;
import Image from 'next/image';
import styles from './contact.module.css';
//import dynamic from 'next/dynamic';
/*import HydrationTest from '@/components/hydrationTest';*/
//const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"),{ssr:false})

const ContactPage=()=>{
    
    return (
        <div className={styles.container}>
           <div className={styles.imgContainer}>
            <Image src="/contact.png" alt='contact' fill className={styles.img}/>
           </div>
           <div className={styles.formContainer}>{/*<HydrationTestNoSSR/>*/}
            <form action='' className={styles.form}>
            <input type="text" placeholder="Name and Surname"/>
            <input type="text" placeholder="Email Address" />
            <input type="text"placeholder="Phone Number (Optional)" />
            <textarea
            name=''
            id=""
            clos="30"
            row="10"
            placeholder='Message'
            />
            
            <button >Send</button>
            </form>
           </div>
        </div>
    )
}
export default ContactPage;

import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const PostCart=()=>{
 
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/19342868/pexels-photo-19342868/free-photo-of-rhume-froid-neige-voitures.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam adipisci in, commodi debitis nulla quo labore placeat accusantium vitae recusandae necessitatibus fuga mollitia, eum eveniet iure dolorum excepturi deleniti?</p>
            <Link className={styles.link} href={"/blog/post"}>READ MORE</Link>
        </div>

        </div>
    )
}
export default PostCart;
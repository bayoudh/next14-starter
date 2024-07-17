import styles from './footer.module.css';
const Footer=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Dev Learn</div>
            <div className={styles.text}>
            © 2024 Creative Thoughts Agency. All rights reserved.
            </div>
        </div>
    )
}
export default Footer;
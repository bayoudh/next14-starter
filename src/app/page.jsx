
import Image from "next/image";
import styles from "./home.module.css"
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>At Creative Thoughts Agency, we transform ideas into impactful realities. Our mission is to drive growth through innovative brand strategies and creative design. We offer services in brand development, digital marketing, content creation, and more, ensuring your brand stands out in the market.</p>
      <div className={styles.buttons}>
      <button className={styles.button}>Learn More</button>
      <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src='/brands.png' alt="barnds" fill className={styles.brand}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif"  alt='hero' fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;
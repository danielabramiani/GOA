import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Programming and Design from Future.</h1>
      <a href="#about">
        <button className={styles.button}>See More</button>
      </a>
    </div>
  );
}

export default Hero;
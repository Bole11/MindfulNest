import { GreenHeader } from "../components/GreenHeader.jsx";
import circle from "../images/circle.png"
import styles from "../styles/ProfilEksperta.module.css";

export function ProfilEksperta() {
  return (
    <section className={styles.section}>
      <GreenHeader>
        <div className={styles.container}>
          <img src="" alt="profile" className={styles.profile}/>
          <h2 className={styles.h2}>Marko Markovic</h2>
          <span className={styles.span}>Terapeut za parove sa visegodisnjim iskustvom</span>
          <div className={styles.wrapper}>
            <div className={`${styles.div} ${styles.wrapper}`}>
              <img src="" alt="star" className={styles.star} />
              <p className={styles.p}>4.9
                <span className={styles.span}> ocena</span>
              </p>
            </div>
            <div className={`${styles.div} ${styles.dot}`}>
              <img src={circle} alt="." />
            </div>
            <div className={styles.div}>
              <p className={styles.p}>124 
                <span className={styles.span}> zakazivanja</span>
              </p>
            </div>
          </div>
        </div>
      </GreenHeader>
      <main className={styles.main}>

      </main>
    </section>
  )
}
import { GreenHeader } from "../components/GreenHeader.jsx";
import { WhiteContainer } from "../components/WhiteContainer.jsx";

import circle from "../images/circle.png"
import star from "../images/star.png";
import leaf from "../images/lowerLeaf.png";
import styles from "../styles/ProfilEksperta.module.css";

export function ProfilEksperta() {

  const types = {
    type1: {
      title: 'Terapija za parove',
      name: 'Marko Markovic',
      rating: [3,4,5,2,5,5,5,5,5,5,5,5,5,5,5],
      image: leaf,
    },
    type2: {
      title: 'Terapija za decu',
      name: 'Marko Markovic',
      rating: [4,3,5,3,5,5,5,5,5],
      image: leaf,
    },
  };

  function getAverageRating(ratingArray) {
    if (!ratingArray || ratingArray === 0) return "N/A";

    const total = ratingArray.reduce((a, b) => a + b, 0);
    const average = total / ratingArray.length;

    return average.toFixed(1);
  }

  return (
    <section className={styles.sectionHeader}>
      <GreenHeader>
        <div className={styles.container}>
          <img src="" alt="profile" className={styles.profile}/>
          <h2 className={styles.h2}>Marko Markovic</h2>
          <span className={styles.span}>Terapeut za parove sa visegodisnjim iskustvom</span>
          <div className={styles.wrapper}>
            <div className={`${styles.div} ${styles.wrapper}`}>
              <img src={star} alt="star" className={styles.star} />
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
      <WhiteContainer>
        <section className={styles.sectionContent}>
          {Object.entries(types).map(([key, { title, name, image, rating }]) => (
            <div key={key} className={styles.content}>
              <div className={styles.contentWrapper}>
                <img src={image} alt="slika" className={styles.contentImage} />
              </div>
              <div className={styles.contentWrapper}>
                  <h3 className={styles.title}>{title}</h3>
                <p className={styles.name}>{name}</p>
                <div>
                  <img src={star} alt="" />
                  <p className={styles.rating}>{getAverageRating(rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </WhiteContainer>
    </section>
  )
}
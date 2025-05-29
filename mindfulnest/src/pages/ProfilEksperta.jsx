import { GreenHeader } from "../components/GreenHeader.jsx";
import { WhiteContainer } from "../components/WhiteContainer.jsx";
import { useState } from "react";

import circle from "../images/circle.png"
import star from "../images/star.png";
import leaf from "../images/lowerLeaf.png";
import styles from "../styles/ProfilEksperta.module.css";

export function ProfilEksperta() {
  const [showSection, setShowSection] = useState(false);
  const [heart, setHeart] = useState(false);
  const [openContentData, setOpenContentData] = useState(null);

  const handleContentOpen = (item) => {
    setOpenContentData(prev => prev?.title === item.title ? null : item);
  };

  const handleHeartClick = () => {
    setHeart(prev => !prev);
    };

  const handleShowSection = () => {
    setShowSection(prev => !prev);
  };

  const handleCloseContent = () => {
    setOpenContentData(prev => !prev);
  }

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
  };

  const getAllRatings = (ratingArray) => {
    return ratingArray.reduce((a, b) => a + b, 0);
  };

  return (
    <section className={styles.sectionHeader}>
      <GreenHeader onToggleAbout={handleShowSection} onHeartClick={handleHeartClick} heart={heart}>
        <div className={styles.container}>
          <img src="" alt="profile" className={styles.profile}/>
          <h1 className={styles.h1}>Marko Markovic</h1>
          <span className={styles.span}>Terapeut za parove sa visegodisnjim iskustvom</span>
          <div className={styles.wrapper}>
            <div className={`${styles.div} ${styles.wrapper}`}>
              <img src={star} alt="star" className={styles.star} />
              <h3 className={styles.h3}>4.9
                <span className={styles.span}> ocena</span>
              </h3>
            </div>
            <div className={`${styles.div} ${styles.dot}`}>
              <img src={circle} alt="." />
            </div>
            <div className={styles.div}>
              <h3 className={styles.h3}>124 
                <span className={styles.span}> zakazivanja</span>
              </h3>
            </div>
          </div>
        </div>
      </GreenHeader>
      <WhiteContainer>
        <section className={styles.sectionContent}>
          {Object.entries(types).map(([key, { title, name, image, rating }]) => (
            <div key={key} className={styles.content} onClick={() => handleContentOpen({ title, name, image, rating })}>
              <div className={styles.contentWrapper}>
                <img src={image} alt="slika" className={styles.contentImage} />
              </div>
              <div className={styles.contentWrapper}>
                  <h3 className={styles.title}>{title}</h3>
                <p className={styles.name}>{name}</p>
                <div className={styles.ratingDiv}>
                  <img src={star} alt="" />
                  <p className={styles.rating}>{getAverageRating(rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {openContentData && (
          <section className={styles.sectionOpenContent}>
            <main className={styles.openContentMain}>
              <div className={styles.openContentHeader}>
                <h2 className={styles.h2}>Ocene</h2>
                <div className={styles.openContentWrapper}>
                  <div className={styles.openContentWrapper}>
                    <img src={star} alt="star" />
                    <h2 className={`${styles.h2} ${styles.small}`}>{getAverageRating(openContentData.rating)}</h2>
                  </div>
                  <div className={`${styles.openContentWrapper} ${styles.borderLeft}`}>
                    <h2 className={`${styles.h2} ${styles.small}`}>{getAllRatings(openContentData.rating)}</h2>
                    <p className={styles.p}>ocena</p>
                  </div>
                </div>
              </div>
              <button className={styles.closeButton} onClick={handleCloseContent}>Zatvori</button>
            </main>
          </section>
        )}

        {showSection && (
          <section className={styles.sectionAbout}>
            <div className={styles.contentAbout}>
              <h2 className={styles.h2}>Marko Markovic</h2>
              <p className={styles.p}>text</p>
            </div>
            <div className={styles.contentAbout}>
              <h2 className={styles.h2}>Biografija</h2>
              <p className={styles.p}>biografija text</p>
            </div>
            <div className={styles.contentAbout}>
              <h2 className={styles.h2}>Iskustvo</h2>
              <p className={styles.p}>iskustvo text</p>
            </div>
          </section>
        )}
      </WhiteContainer>
    </section>
  )
}
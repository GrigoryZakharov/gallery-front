import React from 'react';
import styles from './PaintingCard.module.scss';

interface PaintingCardProps {
  imageUrl: string;
  name: string;
  created: string;
  author: string;
  location: string;
  BASE_URL: string;
}

const PaintingCard: React.FC<PaintingCardProps> = ({
  imageUrl,
  name,
  created,
  author,
  location,
  BASE_URL
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={BASE_URL + imageUrl} alt={name} className={styles.image} />
      </div>
      <div className={styles.infoBackground}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{created}</p>
        </div>
        <div className={styles.infoPlus}>
          <h3>{author}</h3>
          <p>{location}</p>
        </div>
      </div>
      
    </div>
  );
};

export default PaintingCard;

import Link from 'next/link';
import React from 'react';
import styles from './CardDocumentary.module.css';

const DocumentaryCard = ({ documentary }) => {
  return (
    <div className={styles.documentaryCard}>
      <Link href="/[id]" as={`/${documentary.id}`}>
        
          <img src={documentary.image} alt={documentary.nameSpanish || documentary.nameOriginal} className={styles.documentaryImage} />
          <div className={styles.documentaryDetails}>
            <p>{documentary.category.join('| ')}</p>
            <div className={styles.streamingLogos}>
              {documentary.streaming.map((stream, index) => (
                <img
                  key={index}
                  src={`/logos/${stream}.svg`}
                  alt={stream}
                  className={styles.streamingLogo}
                />
              ))}
            </div>
          </div>
        
      </Link>
    </div>
  );
};

export default DocumentaryCard;

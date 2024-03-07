import React from 'react';
import Image from 'next/image';
import styles from './StreamingFilter.module.css';

const streamingPlatforms = [
  'Netflix',
  'PrimeVideo',
  'Disney+',
  'Apple',
  'YouTube',
  'Google',
  'Max',
];

const StreamingFilter = ({ selectedValue, onChange, onClear }) => {
  return (
    <div className={styles.streamingFilterContainer}>
      <div className={styles.streamingFilter}>
        {streamingPlatforms.map((platform) => (
          <div key={platform} className={styles.streamingButtonContainer}>
            <button
              className={`${styles.iconButton} ${platform === selectedValue ? styles.selected : ''}`}
              onClick={() => onChange(platform)}
            >
              <Image
                src={`/streaming/${platform.toLowerCase().replace(/\s+/g, '-')}.svg`}
                alt={platform}
              />
            </button>
            {platform === selectedValue && (
              <button className={styles.clearButton} onClick={() => onClear()}>
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamingFilter;

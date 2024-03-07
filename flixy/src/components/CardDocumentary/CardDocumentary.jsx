import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./CardDocumentary.module.css";

const DocumentaryCard = ({ documentary }) => {
  return (
    <div className={styles.documentaryCard}>
      <Link href="/[id]" as={`/${documentary.id}`}>
        <Image
          src={documentary.image}
          alt={documentary.nameSpanish || documentary.nameOriginal}
          className={styles.documentaryImage}
          width={300}
          height={300}
        />
        <div className={styles.documentaryDetails}>
          <p>{documentary.category.join("| ")}</p>
          <div className={styles.streamingLogos}>
            {documentary.streaming.map((stream, index) => (
              <Image
                key={index}
                src={`/logos/${stream}.svg`}
                alt={stream}
                className={styles.streamingLogo}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DocumentaryCard;

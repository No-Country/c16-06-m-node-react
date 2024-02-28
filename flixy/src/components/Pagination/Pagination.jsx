import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      if (currentPage < totalPages) {
        paginate(currentPage + 1);
      } else {
        paginate(1);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPage, paginate, totalPages]);

  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        &lt;
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

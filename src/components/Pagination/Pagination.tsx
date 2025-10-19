import React from 'react';
import styles from './Pagination.module.scss';
import { pageArray } from '../../utils/pagination';

interface PaginationProps {
  page: number;
  pageQty: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, pageQty, setPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      {pageArray(page, pageQty).map((p: any, index: number) =>
        p === '...' ? (
          <span key={index}>...</span>
        ) : (
          <button
            key={index}
            onClick={() => setPage(Number(p))}
            disabled={false}
            className={p === page ? styles.active : ''}
          >
            {p}
          </button>
        )
      )}
      <button onClick={() => setPage(page + 1)} disabled={page === pageQty}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;

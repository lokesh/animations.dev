import styles from "../styles/DownloadArrow.module.css";

export default function DownloadArrow() {
  return (
    <button aria-label="Download PDF" className={styles.downloadButton}>
      {ArrowDown}
      {ArrowDown}
    </button>
  );
}

const ArrowDown = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrowDown}
  >
    <path
      d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
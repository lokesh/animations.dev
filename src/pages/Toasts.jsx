import { useState, useEffect } from "react";
import styles from '../styles/Toasts.module.css';

export default function Toaster() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toaster}>
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={i} total={toasts} />
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}

function Toast({ index, total }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.toast} style={{ '--position': total - index }} data-mounted={mounted}>
      <span className={styles.title}>Event Created </span>
      <span className={styles.description}>Monday, January 3rd at 6:00pm</span>
    </div>
  );
}

/*
i 
total




newest total-1


*/

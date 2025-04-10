import styles from "../styles/Orbit.module.css";

export default function Orbit() {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.orbitingCircle} />
    </div>
  );
} 
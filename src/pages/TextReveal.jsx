import styles from "../styles/TextReveal.module.css";
import { useState } from "react";

export default function TextReveal() {
  const [reset, setReset] = useState(0);

  return (
    <div>
      <div key={reset}>
        <h1 className={styles.h1}>
          {"Animations".split("").map((letter, index) => (
            <span 
              key={index} 
              className={styles.letter} 
              style={{ "--index": index }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      {/* Use this button to replay your animation */}
      <button className={styles.button} onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  );
} 
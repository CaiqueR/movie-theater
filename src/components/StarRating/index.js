import { useState } from "react";
import styles from "./styles.module.css";

const modifiers = {
  1: styles.one,
  2: styles.two,
  3: styles.three,
  4: styles.four,
  5: styles.five,
};

export function StarRating({ name, value, setValue }) {
  const [hover, setHover] = useState(0);

  return (
    <div className={styles.estrela}>
      {[...Array(5)].map((s, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name={name}
              hidden
              value={ratingValue}
              onClick={() => {
                setValue(value === ratingValue ? 0 : ratingValue);
                if (value === ratingValue) {
                  setHover(0);
                }
              }}
            />

            <span
              className={
                ratingValue <= (hover || value)
                  ? modifiers[ratingValue]
                  : styles["unchecked-icon"]
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(value)}
              fontSize="large"
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
}

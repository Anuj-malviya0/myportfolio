import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 29.475 1.538 l -7.18 18.35 l -0.003 0.001 l -9.72 -18.442 a 0.838 0.838 180 0 0 -1.524 0.093 l -3.39 8.824 a 0.846 0.846 180 0 0 0.04 0.686 L 15.693 26.395 A 6.698 6.698 180 0 0 21.633 30 h 4.6 a 0.84 0.84 180 0 0 0.74 -1.23 l -3.63 -6.887 l 3.655 -9.15 l 7.12 13.662 A 6.698 6.698 180 0 0 40.058 30 h 4.6 a 0.842 0.842 180 0 0 0.748 -1.23 L 31 1.446 a 0.839 0.839 180 0 0 -1.524 0.092 z M 3.608 21.194 a 0.835 0.835 180 0 0 -0.387 0.446 v -0.001 l -2.67 7.23 a 0.838 0.838 180 0 0 0.785 1.129 h 6.578 a 0.837 0.837 180 0 0 0.736 -1.238 l -3.907 -7.226 c -0.22 -0.41 -0.729 -0.56 -1.135 -0.34 z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});

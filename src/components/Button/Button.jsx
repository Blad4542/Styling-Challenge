import React from 'react';
import styles from './Button.module.scss';

const Button = ({ variant, children }) => {
  const buttonStyles = variant === 'icon' ? styles.icon : styles.default;

  return (
    <button className={`${styles.button} ${buttonStyles}`} disabled={false}>
      {children}
    </button>
  );
};

export default Button;

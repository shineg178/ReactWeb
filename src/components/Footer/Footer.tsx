import React from 'react';
import styles from './Footer.module.css'; 

interface FooterProps {
  // props가 있다면 여기에 정의
}

function Footer({}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

interface HeaderProps {
  // props가 있다면 여기에 정의
}

function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Website</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
          <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
          <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
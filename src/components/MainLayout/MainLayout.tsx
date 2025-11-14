import React, { ReactNode } from 'react';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import styles from './MainLayout.module.css'; 

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
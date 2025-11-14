import React from 'react';
import styles from './Home.module.css'; 

interface HomeProps {
  // props가 있다면 여기에 정의
}

function Home({}: HomeProps) {
  return (
    <div className={styles.homeContent}>
      <h1>Welcome to My Website!</h1>
      <p>This is the home page content.</p>
      <p>Start building your amazing React application here.</p>
    </div>
  );
}

export default Home;
import React from 'react';
import styles from './About.module.css';
import pic from '../../assets/pic.jpg';

const About = () => {
  return (
    <div>
      <section className={styles.aboutPage}>
        <h1 className={styles.title}>About the Characters App</h1>
        <p className={styles.description}>
          This app is your ultimate guide to exploring all the characters from the hit animated series <em>Rick and Morty</em>! Featuring detailed profiles of every character, from fan favorites like Rick and Morty to lesser-known faces across the multiverse, this app is perfect for fans who want to dive deeper into the series.
        </p>
        <div className={styles.pictureContainer}>
          <img src={pic} alt="picture" className={styles.picture} />
        </div>
        <h2 className={styles.subtitle}>What You Can Do</h2>
        <ul className={styles.featureList}>
          <li>🔍 View profiles of all the characters from <em>Rick and Morty</em>.</li>
          <li>📖 Learn about each character's origin, species, status, and more.</li>
          <li>❤️ Mark your favorite characters to easily access them later.</li>
          <li>🎨 Enjoy a sleek and user-friendly interface designed for fans.</li>
        </ul>
        <h2 className={styles.subtitle}>About Rick and Morty</h2>
        <p className={styles.description}>
          Created by Justin Roiland and Dan Harmon, <em>Rick and Morty</em> is a sci-fi comedy that explores the adventures of Rick Sanchez, a genius but reckless scientist, and Morty Smith, his kind-hearted but often reluctant grandson. The show is beloved for its blend of dark humor, mind-bending concepts, and heartfelt storytelling.
        </p>
        <h2 className={styles.subtitle}>Start Exploring!</h2>
        <p className={styles.description}>
          Discover the multiverse of <em>Rick and Morty</em> characters today. From bizarre aliens to iconic recurring characters, there’s always something new to learn about your favorite show!
        </p>
      </section>
    </div>
  );
};

export default About;

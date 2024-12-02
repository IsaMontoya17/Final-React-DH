import React from 'react';
import Card from '../../components/card/Card';
import { useFavs } from '../../context/FavsContext';
import styles from './Favorites.module.css';

const Favorites = () => {
  const { favs } = useFavs();

  return (
    <div>
      <section className={styles.cardContainer}>
        {favs.length > 0 ? (
          favs.map((character) => (
            <Card key={character.id} character={character} />
          ))
        ) : (
          <p className={styles.emptyMessage}>Ups... No favorites yet.</p>
        )}
      </section>
    </div>
  );
};

export default Favorites;

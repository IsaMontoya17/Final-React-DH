import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCharacter } from '../../services/getOneCharacter';
import styles from './Character.module.css';
import { useFavs } from '../../context/FavsContext';

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { favs, addToFavs, deleteFromFavs } = useFavs();

  useEffect(() => {
    getOneCharacter(id)
      .then(data => setCharacter(data));
  }, [id]);

  useEffect(() => {
    const favorite = favs.find((fav) => String(fav.id) === String(id));
    setIsFavorite(!!favorite);
  }, [favs, id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      deleteFromFavs(id);
      setIsFavorite(false);
    } else {
      addToFavs(character);
      setIsFavorite(true);
    }
  };

  if (!character) return <p>Loading...</p>;

  const { name, gender, species, status, image, origin, location } = character;

  return (
    <>
      <div className={styles.character}>
        <div className={styles.imageContainer}>
          <img src={image} alt={name} className={styles.image} />
        </div>
        <div className={styles.info}>
          <i
            className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart ${styles['favorite-icon']}`}
            style={{ color: isFavorite ? '#d90d0d' : '#000000' }}
            onClick={toggleFavorite}
          ></i>
          <h1 className={styles.name}>{name}</h1>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Species:</strong> {species}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Origin:</strong> {origin?.name}</p>
          <p><strong>Location:</strong> {location?.name}</p>
        </div>
      </div>
    </>
  );
};

export default Character;

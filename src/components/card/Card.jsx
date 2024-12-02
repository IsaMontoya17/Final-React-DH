import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import { useFavs } from '../../context/FavsContext';

const Card = ({ character }) => {
    const { id, name, gender, image } = character;
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const { favs, addToFavs, deleteFromFavs } = useFavs();

    useEffect(() => {
        const favorite = favs.find((fav) => fav.id === id);
        setIsFavorite(!!favorite);
    }, [favs, id]);

    const handleClick = () => {
        navigate(`/character/${id}`);
    };

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

    return (
        <div className={styles.card} onClick={handleClick}>
            <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart ${styles['favorite-icon']}`}
                style={{ color: isFavorite ? '#d90d0d' : '#000000' }}
                onClick={toggleFavorite}></i>
            <img src={image} alt={name} className={styles.image} />
            <div className={styles.info}>
                <h2 className={styles.name}>{name}</h2>
                <p><strong>Gender:</strong> {gender}</p>
            </div>
        </div>
    );
};

export default Card;

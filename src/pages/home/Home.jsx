import React from 'react'

import { getCharacters } from '../../services/getCharacters';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import styles from'./Home.Module.css'

const Home = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
            .then(data => setCharacters(data.results));
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Rick and Morty Characters</h1>
                <section className={styles.cardContainer}>
                    {characters.map(character => (
                        <Card key={character.id} character={character} />
                    ))}
                </section>
            </div>
        </>
    )
}

export default Home
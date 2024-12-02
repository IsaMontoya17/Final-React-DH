import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p className={styles.copyright}>&copy; 2024 Isabela Montoya. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
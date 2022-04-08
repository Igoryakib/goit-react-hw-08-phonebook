import React from "react";

import styles from './HomePage.module.css';

const HomePage = () => {
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Congratulations !!! &#128512;</h1>
            <p className={styles.subtitle}>You need register or login, that begin using phonebook</p>
        </section>
    );
};

export default HomePage;
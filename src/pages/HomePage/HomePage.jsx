import React from "react";

import { connect } from 'react-redux';
import { getAuthorization } from "../../redux/authurization/auth-selectors";

import styles from './HomePage.module.css';

const HomePage = ({isAuthorized}) => {
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Congratulations !!! &#128512;</h1>
            <p className={styles.subtitle}>{isAuthorized ? 'Great, you can use functional in this site, for instance note your contacts :)' : 'You need register or login, that begin using phonebook'}</p>
        </section>
    );
};

const mapStateToProps = state => ({
    isAuthorized: getAuthorization(state),
})

export default connect(mapStateToProps)(HomePage);
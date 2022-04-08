import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import path from '../utils/routePath';
import HomePage from '../pages/HomePage/HomePage';

import styles from "./App.module.css";

const App = () => {
    return(
        <>
        <Header/>
        <main className={styles.main}>
        <Routes>
            <Route path={path.homePage} element={<HomePage/>}/>
        </Routes>
        </main>
        </>
    );
};

// coment 

export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import path from '../utils/routePath';
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';

import styles from "./App.module.css";

const App = () => {
    return(
        <>
        <Header/>
        <main className={styles.main}>
        <Routes>
            <Route path={path.homePage} element={<HomePage/>}/>
            <Route path={path.registerPage} element={<RegisterPage/>}/>
            <Route path={path.loginPage} element={<LoginPage/>}/>
            <Route path={path.contactsPage} element={<ContactsPage />}/>
        </Routes>
        </main>
        </>
    );
};

// coment 

export default App;
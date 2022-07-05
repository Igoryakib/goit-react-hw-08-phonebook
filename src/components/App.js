import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { getCurrentProfile } from "../redux/authurization/auth-operations";

import Header from "./Header/Header";
import path from "../utils/routePath";
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import PrivateRoute from "../utils/PrivateRoute";
import PublicRoute from "../utils/PublicRoute";

import styles from "./App.module.css";

const App = ({ getCurrentUser }) => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path={path.homePage} element={<HomePage />} />
          <Route
            path={path.registerPage}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path={path.loginPage}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={path.contactsPage}
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentProfile()),
});

export default connect(null, mapDispatchToProps)(App);

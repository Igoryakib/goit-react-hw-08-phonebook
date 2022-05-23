import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAuthorization } from "../../redux/authurization/auth-selectors";

import styles from "./Navigation.module.css";

import UserMenu from "../UserMenu/UserMenu";

const Navigation = ({ isAuthorization }) => {
  console.log(isAuthorization)
  return (
    <nav className={styles.nav}>
      <ul className={styles.contentNav}>
        <ul className={styles.wrapperNav}>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.navItem__active : styles.navItem
            }
            to={"/"}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.navItem__active : styles.navItem
            }
            to={"/contacts"}
          >
            <li>Contacts</li>
          </NavLink>
        </ul>
        {isAuthorization ? (
          <UserMenu name="Ihor" img="https://wallpapercave.com/wp/wp3284755.jpg"/>
        ) : (
          <ul className={styles.wrapperAuth}>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.navItem__active : styles.navItem
              }
              to={"/register"}
            >
              <li>Register</li>
            </NavLink>
            <span className={styles.spanItem}>/</span>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.navItem__active : styles.navItem
              }
              to={"/login"}
            >
              <li>Login</li>
            </NavLink>
          </ul>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthorization: getAuthorization(state)
});

export default connect(mapStateToProps)(Navigation);

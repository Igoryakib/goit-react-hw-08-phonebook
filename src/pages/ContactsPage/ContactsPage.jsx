import React from "react";
import PropTypes from "prop-types";
import styles from './ContactsPage.module.css';
import PhoneBook from "../../components/PhoneBook/PhoneBook";

const ContactsPage = () => {
  const {title_section, phoneBook_section} = styles;
  return (
    <section className={phoneBook_section}>
      <h1 className={title_section}>PhoneBook</h1>
      <PhoneBook/>
    </section>
  );
};

ContactsPage.propTypes = {
  title: PropTypes.string,
}

export default ContactsPage;
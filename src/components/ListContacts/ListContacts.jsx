import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import {removeContact} from '../../redux/contacts/contacts-operations';

import styles from "./ListContacts.module.css";
import ContactItem from "../ContactItem/ContactItem";

const ListContacts = ({ contacts, onDeleteContact, btnText }) => {
  const { list } = styles;
  return (
    <ul className={list}>
      {contacts?.map((item) => {
        return (
          <ContactItem
            key={item.id} 
            itemArray={item}
            onDelete={()=>{onDeleteContact(item.id)}}
            btnText={btnText}
          />
        );
      })}
    </ul>
  );
};

ListContacts.propTypes = {
  btnText: PropTypes.string
};

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) => (dispatch(removeContact(contactId))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);
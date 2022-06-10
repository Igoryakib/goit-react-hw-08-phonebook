import React from "react";
import { connect } from "react-redux";
import {
  filterContacts
} from "../../redux/contacts/contacts-actions";
import {getFilterContacts } from '../../redux/contacts/contacts-selectors';

import styles from "./Filter.module.css";

const Filter = ({ value, filterContacts}) => {
  const { input_form, label_form } = styles;
    const handleOnChange = (event) => {
      filterContacts(event.currentTarget.value);
    };

  return (
    <label className={label_form}>
      Find contacts by name
      <input
        className={input_form}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleOnChange}
        value={value}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: getFilterContacts(state)
});

const mapDispatchToProps = (dispatch) => ({
  filterContacts: (filterText) => {dispatch(filterContacts(filterText))},
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
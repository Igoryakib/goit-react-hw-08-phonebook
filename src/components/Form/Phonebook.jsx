import React, {useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import {addContact} from '../../redux/action-operations';
// import {getFilteredContacts, getLoading } from '../../redux/selectors';

import styles from "./Phonebook.module.css";
import ListContacts from "../ListContacts/ListConatcts";
import Filter from "../Filter/Filter";

const  PhoneBook = () => {
//   state = {
//     name: "",
//     number: "",
//     filter: "",
//   };

const [name, setName] = useState('');
const [number, setNumber] = useState('');
const [filter, setFilter] = useState('');

 const  verifyData = () => {
    name.toLocaleLowerCase();
    this.props.contacts.map((item) => {
      item.name.toLocaleLowerCase();
      if (item.name === this.state.name || item.number === this.state.number) {
        alert(`${this.state.name} is already in contacts`);
        return setName('') && setNumber('');
      }
    });
  };

 const addContact = (event) => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };
    addContact(contact);
    setName('');
    setNumber('');
  };

  
    const { input_form, form_add_contact, label_form, submit_btn, title_list } =
      styles;

    // const normalizedFilterArray = filter.toLowerCase();
    // const filteredArray = contacts.filter((item) =>
    //   item.name.toLowerCase().includes(normalizedFilterArray)
    // );

    return (
      <>
        <form className={form_add_contact} onSubmit={addContact}>
          <label className={label_form}>
            Name
            <input
              className={input_form}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={(event)=> setName(event.target.value)}
              value={name}
            />
          </label>
          <label className={label_form}>
            Number
            <input
              className={input_form}
              value={number}
              onChange={(event)=> setNumber(event.target.value)}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={submit_btn} type="submit">
          Add contact
          </button>
        </form>
        <h2 className={title_list}>Contacts</h2>
        <div>
          <Filter/>
          <ListContacts 
            btnText="Delete"
          />
          {/* {this.props.isLoading ? <h1>Loading ...</h1> :           <ListContacts 
            btnText="Delete"
          />} */}
        </div>
      </>
    );
  }

PhoneBook.propTypes = {
    btnText: PropTypes.string,
  };

export default PhoneBook;

// const mapDispatchToProps = (dispatch) => ({
//     addContact: (contactObj) => (dispatch(addContact(contactObj))),
// });

// const mapStateToProps = (state) => ({
//   contacts: getFilteredContacts(state),
//   isLoading: getLoading(state),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addContact} from '../../redux/contacts/contacts-operations';
import {getFilteredContacts, getLoading } from '../../redux/contacts/contacts-selectors';

import styles from "./PhoneBook.module.css";
import ListContacts from "../ListContacts/ListContacts";
import Filter from "../Filter/Filter";

class PhoneBook extends Component {
  state = {
    name: "",
    number: "",
    filter: "",
  };

  static propTypes = {
    btnText: PropTypes.string,
  };

  verifyData = () => {
    this.state.name.toLocaleLowerCase();
    this.props.contacts.map((item) => {
      item.name.toLocaleLowerCase();
      if (item.name === this.state.name || item.number === this.state.number) {
        alert(`${this.state.name} is already in contacts`);
        return this.setState({
          name: "",
          number: "",
        });
      }
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
    this.verifyData();
  };

  addContact = (event) => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(contact);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { btnText } = this.props;
    const { name, contacts, number, filter } = this.state;
    const { input_form, form_add_contact, label_form, submit_btn, title_list } =
      styles;

    // const normalizedFilterArray = filter.toLowerCase();
    // const filteredArray = contacts.filter((item) =>
    //   item.name.toLowerCase().includes(normalizedFilterArray)
    // );

    return (
      <>
        <form className={form_add_contact} onSubmit={this.addContact}>
          <label className={label_form}>
            Name
            <input
              className={input_form}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleOnChange}
              value={name}
            />
          </label>
          <label className={label_form}>
            Number
            <input
              className={input_form}
              value={number}
              onChange={this.handleOnChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={submit_btn} type="submit">
            add contact
          </button>
        </form>
        <h2 className={title_list}>Contacts</h2>
        <div>
          <Filter/>
          {this.props.isLoading ? <h1>Loading ...</h1> :           <ListContacts
            btnText="Delete"
          />}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    addContact: (contactObj) => (dispatch(addContact(contactObj))),
});

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
  isLoading: getLoading(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
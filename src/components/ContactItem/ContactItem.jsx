import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

const ContactItem = ({ onDelete, btnText, itemArray }) => {
  const { list_item, item_elem, delete_btn } = styles;
  return (
    <li className={list_item}>
      <p>
        {itemArray.name}:<span className={item_elem}>{itemArray.number}</span>
      </p>
      <button className={delete_btn} onClick={onDelete} type="button">
        {btnText}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  itemArray: PropTypes.object.isRequired,
  btnText: PropTypes.string,
};

export default ContactItem;
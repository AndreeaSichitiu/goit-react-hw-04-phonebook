import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';

export default function ContactItem({ contacts, onDeleteContact }) {
  
  return (
    <div>
      <li key={contacts.id} className={style.contactItem}>
        <div className={style.contacts}>
        <p>{contacts.name}</p>
        <p>{contacts.number} </p>
        </div>
        <button
          type="button"
          className={style.formButton}
          onClick={() => onDeleteContact(contacts.id, contacts.name)}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

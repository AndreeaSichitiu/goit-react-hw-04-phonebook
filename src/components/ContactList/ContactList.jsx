import React from 'react';
// import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList({contacts, onDeleteContact}) {
  return (
    <div className={style.contactWrapper}>
      <h2>Contacts</h2>
      <ul className={style.contactList}>
        {contacts.map(contact => {
          return <ContactItem key={contact.id} contacts={contact} onDeleteContact={onDeleteContact} />;
        })}
      </ul>
    </div>
  );
}

 
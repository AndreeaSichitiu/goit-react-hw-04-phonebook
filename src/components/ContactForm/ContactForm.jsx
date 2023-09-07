import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={style.phonebookWrapper}>
      <h1>Phonebook</h1>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label className={style.formLabel}>Name</label>
        <input
          className={style.phonebookInput}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={event => setName(event.target.value)}
          required
        ></input>
        <label className={style.formLabel}>Phone Number</label>
        <input
          className={style.phonebookInput}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={event => setNumber(event.target.value)}
          required
        ></input>
        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};

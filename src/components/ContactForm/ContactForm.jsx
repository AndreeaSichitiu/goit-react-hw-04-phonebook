import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    this.props.handleSubmit(this.state);
    form.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={style.phonebookWrapper}>
        <h1>Phonebook</h1>
        <form className={style.contactForm} onSubmit={this.handleSubmit}>
          <label className={style.formLabel}>Name</label>
          <input
            className={style.phonebookInput}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
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
            value={number}
            onChange={this.handleChange}
            required
          ></input>
          <button className={style.formButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

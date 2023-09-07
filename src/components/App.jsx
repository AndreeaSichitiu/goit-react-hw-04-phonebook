import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { nanoid } from 'nanoid';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialState
  );
  const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    const contactExists = contacts.some(contact => contact.name === name);

    if (contactExists) {
      Notify.warning(`${name} is already in contacts`, {
        position: 'center-center',
      });
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
    Notify.success(`${name} was successfully added to your contacts`, {
      position: 'center-center',
    });
  };

  const onDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    setFilter('');
 
  };
  

  const handleFilterChange = filterValue => {
    setFilter(filterValue);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <ContactForm onAddContact={handleAddContact} />
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}

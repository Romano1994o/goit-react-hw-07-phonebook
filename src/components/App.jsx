import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getContactList } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import { AppContainer, AppHeader, AppContacts } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContactList);
  const dispatch = useDispatch();

  const areContactsAdded = contacts.length > 0; 

  if (!areContactsAdded) {
    const exampleContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
      { id: 'id-3', name: 'Eden Clements', number: '6451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
    ];

    exampleContacts.forEach(contact => {
      dispatch(addContact(contact));
    });
  }

  return (
    <AppContainer>
      <AppHeader>Phonebook</AppHeader>
      <ContactForm />
      <AppContacts>Contacts</AppContacts>
      <Filter />
      <ContactList contacts={contacts} />
    
    </AppContainer>
  );
};

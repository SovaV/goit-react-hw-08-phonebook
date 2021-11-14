import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../redux/contacts/contactsOperations';
import { getVisibleContacts } from '../redux/contacts/ContactSelector';
import ContactsEl from '../ContactList/ContactElement/ContactElement';
import c from './ContactList.module.css';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  return (
    <ul className={c.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={c.item}>
          <ContactsEl name={name} number={number} onDeleteContact={() => onDeleteContact(id)} />
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

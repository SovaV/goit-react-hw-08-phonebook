import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../../ContactList/ContactList ';
import ContactForm from '../../ContactForm/ContactForm';
import Filter from '../../Filter/Filter';
import * as contactsOperations from '../../redux/contacts/contactsOperations';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

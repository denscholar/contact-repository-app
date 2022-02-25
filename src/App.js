import './App.css';
import AddContact from './component/addContact/Addcontact';
import ContactList from './component/contactList/ContactList';
import Header from './component/header/Header';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';
  const id = uuidv4();
  
  // add contact function
  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id: id, ...contact}])
  }

  // display the contact
    useEffect(() => {
    const displayData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(displayData);
  },[])

  // delete the contact

  const deleteHandler = (id) =>{
    const copyContact = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(copyContact);
  }

  // using local storage to persist data
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])
  
  return (
    <div className="App">
      <Header />
      <AddContact contacts={contacts} addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getcontactId={deleteHandler} />

    </div>
  );
}

export default App;

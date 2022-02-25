import './ContactList.css'
import ContactCard from '../contactCard/ContactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) =>{
        props.getcontactId(id);
    }
    return (
    <div className='container'>
        <h2>Contact Directory</h2> 
        {props.contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />
        ))}
    </div>
    );
}

export default ContactList
import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../redux/selectors';


const ContactList = () => {
  const contactsState = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log('Filter: ' + filter);
  console.log(contactsState);


  const filtered = () => {
    return contactsState.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={style.contacts}>
      <ul className={style.contacts_list}>
        {filtered().map(contact => (
          <ContactElement contact={contact} key={contact.id} id={contact.id} contactsState={contactsState}/>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

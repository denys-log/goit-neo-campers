import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className="list">
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
}

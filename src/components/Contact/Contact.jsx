import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <div className="box contact">
      <div>
        <div>
          <i className="fas fa-user" style={{ marginRight: '5px' }}></i>
          <span>{name}</span>
        </div>
        <div>
          <i className="fas fa-phone" style={{ marginRight: '5px' }}></i>
          <span>{number}</span>
        </div>
      </div>
      <button
        style={{ marginLeft: '20px' }}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}

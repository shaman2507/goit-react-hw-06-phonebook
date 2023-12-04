import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContacts } from 'store/contactsSlice/contactsSlice';

const ContactList = () => {
    const filter = useSelector(state => state.filter);
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const deleteContact = contactId => {
        const deleteCont = contacts.contacts.filter(
            contact => contact.id !== contactId
        );

        dispatch(deleteContacts(deleteCont))
    };

    const newFilteredContacts = filter ? contacts.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    ) : contacts.contacts;

    return (
        newFilteredContacts.length > 0 && (
            <ul>
                {newFilteredContacts.map(({ name, id, number }) => (
                    <li key={id} className={css.itemList}>
                        {name}: {number}
                        <button onClick={() => deleteContact(id)} className={css.btn}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        )
    );
};

export default ContactList;
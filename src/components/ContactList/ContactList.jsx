import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { showNotification, hideNotification } from 'redux/notificationSlice'; 
import {
  ContactListContainer,
  ContactItem,
  ContactName,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContactList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));

    
    dispatch(
      showNotification({
        id: nanoid(), 
        title: 'Success',
        type: 'success',
        content: `${name} has been deleted successfully`,
      })
    );
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      {/* {filteredContacts.length === 0 && (
        <h2>Please use the form above to add your first contact.</h2>
      )} */}
      {filteredContacts.length > 0 && (
        <ul>
          {filteredContacts.map(contact => (
            <ContactListContainer key={contact.id}>
              <ContactItem>
                <ContactName>
                  {contact.name}: {contact.number}
                </ContactName>
                <DeleteButton
                  onClick={() => handleDelete(contact.id, contact.name)}
                >
                  Delete
                </DeleteButton>
              </ContactItem>
            </ContactListContainer>
          ))}
        </ul>
      )}
    </div>
  );
};

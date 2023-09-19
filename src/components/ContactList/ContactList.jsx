import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading, selectFilteredContacts } from 'redux/selectors';
import { showNotification, hideNotification } from 'redux/notificationSlice';
import { FaPhone, FaTrash } from 'react-icons/fa';
import {
  ContactListContainer,
  ContactItem,
  ContactInfo,
  ContactName,
  ContactPhone,
  DeleteButton,
  CallButton,
  StyledNotificationContent,
} from './ContactList.styled';


export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    dispatch(
      showNotification({
        id: nanoid(),
        title: 'Error',
        type: 'error',
        content: (
          <StyledNotificationContent>Contact 
            {'  '}<span>{name}</span> has been deleted successfully
          </StyledNotificationContent>
        ),
      })
    );
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div>
  <ul>
    {contacts.map((contact) => (
      <ContactListContainer key={contact.id}>
        <ContactItem>
       <ContactInfo>
       <CallButton onClick={() => handleCall(contact.phone)}>
       <FaPhone />
            </CallButton>
            <ContactName>{contact.name}:</ContactName>
            <DeleteButton
              onClick={() => handleDelete(contact.id, contact.name)}
              disabled={isLoading}
            >
               <FaTrash />
            </DeleteButton>
       </ContactInfo>

            <ContactPhone>{contact.phone}</ContactPhone>
         
          
            
            
          
        </ContactItem>
      </ContactListContainer>
    ))}
  </ul>
</div>
  );
};

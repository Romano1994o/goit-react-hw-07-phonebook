import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { showNotification, hideNotification } from 'redux/notificationSlice';
import {Notification } from './../Notification/Notification';
import { getContactList, getNotification } from 'redux/selectors.js';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
  StyledSubmitButton,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const ContactsValidation = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string()
    .min(6, 'Number must be at least 6 characters')
    .max(10, 'Number must be at most 10 characters')
    .required('* Number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContactList);
  const notifications = useSelector(getNotification);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      dispatch(showNotification({ 
        id: nanoid(), 
        title: 'Error',
        type: 'error', 
        content: `${values.name} is already in contacts` }));
      return;
    }

    if (contacts.find(contact => contact.number === values.number)) {
      dispatch(showNotification({
        id: nanoid(), 
        title: 'Error',
        type: 'error', 
        content: `${values.number} is already in contacts` }));
      return;
    }

    dispatch(addContact({ ...values, id: nanoid() }));

    
    dispatch(showNotification({
      id: nanoid(), 
      title: 'Success',
      type: 'success',
      content: 'Contact added successfully'
    }));

    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);

    
  };
  const handleHideNotification = (id) => {
      dispatch(hideNotification(id));
    };

  return (
    <>
     {notifications && notifications.map((notification, index) => (
  <Notification
    key={`${notification.id}-${index}`}
    id={notification.id}
    type={notification.type}
    title={notification.title}
    content={notification.content}
    onHide={handleHideNotification}
  />
))}

      <Formik
        initialValues={initialValues}
        validationSchema={ContactsValidation}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
              Name
              <StyledInput type="text" name="name" />
              <StyledErrorMessage name="name" component="div" />
            </StyledLabel>
            <StyledLabel>
              Number
              <StyledInput type="tel" name="number" />
              <StyledErrorMessage name="number" component="div" />
            </StyledLabel>

            <StyledSubmitButton type="submit" disabled={!isValid}>Add contact</StyledSubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
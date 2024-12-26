import { Col } from 'react-bootstrap';
import ContactEdit from './ContactEdit'; 
import { useState } from 'react';
import useContactContexthook from '../hooks/use-contact-context-hook';

const ContactShow = ({contact}) => {

  const { deleteContactById } = useContactContexthook();

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteContactById(contact.id);
  }

  // Close Contact Edit Form on submit
  const closeContactEditForm = () => {
    setIsEditing(false);
  }

  return (
    <Col sm={6} md={4} lg={3}>
      <div className="contact-show p-4 rounded mb-3">
        <div className="d-flex justify-content-end card-icon-container">
          <p className='edit-contant-icon me-2 px-1 d-block rounded' onClick={() => {setIsEditing(!isEditing)}}>&#9998;</p>
          <p className='close-contact-icon d-block px-2 rounded' onClick={handleDelete} >&#10539;</p>
        </div>
        <p className={`mb-2 ${isEditing ? "d-none": null}`}><span className="me-2">Name:</span>{contact.name}</p>
        <div className={`${isEditing ? "d-none": null}`}>
          Mobile:
          <a className="ms-2" href={`tel:${contact.mobile}`}>{contact.mobile}</a>
        </div>
        {
          isEditing ? <ContactEdit contact={contact} activeEdit={closeContactEditForm}/> : null
        }
      </div>
    </Col>
  )
}

export default ContactShow;
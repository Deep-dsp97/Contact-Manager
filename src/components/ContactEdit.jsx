import { useState } from "react";
import useContactContexthook from '../hooks/use-contact-context-hook';

const ContactEdit = ({contact, activeEdit}) => {

  const { updateContactById } = useContactContexthook();

  const [updateContact, setUpdateContact] = useState({
    id: contact.id,
    name: contact.name,
    mobile: contact.mobile
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateContactById(updateContact);
    // Close edit form
    activeEdit(false);
  }

  const handleChange = (event) => {

    const { name } = event.target;

    switch (name){
      case 'name':
        setUpdateContact({
          ...updateContact,
          name: event.target.value
        });
        break;
      case 'phone':
        setUpdateContact({
          ...updateContact,
          mobile: event.target.value
        });
        break;
    }
  }

  return (
    <form className="form-create-contact d-flex flex-column" onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="input-name">Name:</label>
        <input value={updateContact.name} className="mb-3 py-2 rounded" onChange={handleChange} type="text" id="input-name" name="name" autoComplete="true"/>

        {/* Contact Numner */}
        <label htmlFor="phone">Mobile No:</label>
        <input value={updateContact.mobile} className="mb-3 py-2 rounded" onChange={handleChange} type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" autoComplete="true"/>

        <button className="custom-button-bg-fill py-2 rounded">Save!</button>
    </form>
  )
}

export default ContactEdit
import { useState } from "react";
import useContactContexthook from '../hooks/use-contact-context-hook';

const CreateContact = () => {

  const { createContact, setIsMobile, isMobile } = useContactContexthook();

  const [formData, setFormData] = useState({
    name:'',
    mobile:''
  })

  const formSubmitHandle = (event) => {
    event.preventDefault();
    createContact(formData);
    setFormData({
      name:'',
      mobile:''
    });
    setIsMobile(!isMobile);
  }

  const handleChange = (event) => {

    const { name } = event.target;

    switch (name){
      case 'name':
        setFormData({
          ...formData,
          name: event.target.value
        });
        break;
      case 'phone':
        setFormData({
          ...formData,
          mobile: event.target.value
        });
        break;
    }

  }

  return (
    <div className={`${ !isMobile ? "form-create-contact-container-toggle": "form-create-contact-container-toggle-active"} form-create-contact-container py-4 pt-xl-0 rounded`}>
      <form className="form-create-contact d-flex flex-column px-3" onSubmit={formSubmitHandle}>
          {/* Name */}
          <label htmlFor="input-name">Name:</label>
          <input value={formData.name} className="mb-3 py-2 rounded" type="text" id="input-name" name="name" onChange={handleChange} autoComplete="true"/>

          {/* Contact Numner */}
          <label htmlFor="phone">Mobile No:</label>
          <input value={formData.mobile} className="mb-3 py-2 rounded" type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" onChange={handleChange} autoComplete="true"/>

          <button className="custom-button-bg-fill py-2 rounded">Add Contact</button>
      </form>
    </div>
  )
}

export default CreateContact;
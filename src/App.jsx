import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

function App () {

  const [ contacts, setContacts ] = useState([]);

  const fetchCurrentData = async () => {
    const response = await axios.get('http://localhost:3007/contacts');
    setContacts(response.data);
  }

  // Fetch Current Data on load
  useEffect(()=>{
    fetchCurrentData();
  }, []);

  // Create Contact
  const createContact = async (data) => {
    const response = await axios.post('http://localhost:3007/contacts', data);
    setContacts([...contacts, response.data]);
  }

  // Delete By Id
  const deleteContactById = async (id) => {
    const response = await axios.delete(`http://localhost:3007/contacts/${id}`);

    const updateContacts = contacts.filter((contact) => {
      return contact.id !== id 
    })
    setContacts(updateContacts);
  }

  // Update By Id
  const updateContactById = async (data) => {
    const response = await axios.put(`http://localhost:3007/contacts/${data.id}`,{
      ...data,
      name: data.name,
      mobile: data.mobile
    });

    contacts.map((contact) => {
      if(contact.id == data.id){
        return {
          ...contact,
          name: data.name,
          mobile: data.mobile
        }
      }
      return contact;
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={2} className="logo-column-container px-0">
          <Navbar onCreate={createContact}/>
        </Col>
        <Col lg={10} className="show-contact-list-contianer">
          <ContactList contacts={contacts} onDelete={deleteContactById} onUpdate={updateContactById}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import { Container, Row, Col } from 'react-bootstrap';
// Context
import useContactContexthook from './hooks/use-contact-context-hook';

function App () {

  const { fetchCurrentData } = useContactContexthook();

  // Fetch Current Data on load
  useEffect(()=>{
    fetchCurrentData();
  }, []);

  return (
      <Container fluid>
        <Row>
          <Col lg={2} className="logo-column-container px-0">
            {/* <Navbar onCreate={createContact}/> */}
            <Navbar/>
          </Col>
          <Col lg={10} className="show-contact-list-contianer">
            {/* <ContactList contacts={contacts} onDelete={deleteContactById} onUpdate={updateContactById}/> */}
            <ContactList/>
          </Col>
        </Row>
      </Container>
  )
}

export default App

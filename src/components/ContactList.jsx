import ContactShow from "./ContactShow";
import { Container, Row } from 'react-bootstrap';
import useContactContexthook from '../hooks/use-contact-context-hook';
import ContactSearch from "./ContactSearch";

const ContactList = () => {

  const { contacts } = useContactContexthook();
  
  const lists = contacts.map((contact) => {
    return <ContactShow contact={contact} key={contact.id}/>
  });

  return (
    <Container fluid>
        <div className="d-none d-xl-flex justify-content-end">
            <ContactSearch/>
        </div>
        <hr className="w-100"/>
        <Row>
            <p className="contact-list-title">Contact List</p>
            {lists}
        </Row>
    </Container>
  )
}

export default ContactList
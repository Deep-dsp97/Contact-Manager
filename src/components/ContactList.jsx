import ContactShow from "./ContactShow";
import { Container, Row } from 'react-bootstrap';
import useContactContexthook from '../hooks/use-contact-context-hook';

const ContactList = () => {

  const { contacts } = useContactContexthook();
  
  const lists = contacts.map((contact) => {
    return <ContactShow contact={contact} key={contact.id}/>
  });

  return (
    <Container fluid>
        <Row>
            <p className="contact-list-title">Contact List</p>
            {lists}
        </Row>
    </Container>
  )
}

export default ContactList
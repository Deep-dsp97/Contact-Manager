import ContactShow from "./ContactShow";
import { Container, Row } from 'react-bootstrap';

const ContactList = ({contacts, onDelete, onUpdate}) => {
  
  const lists = contacts.map((contact) => {
    return <ContactShow contact={contact} key={contact.id} onDelete={onDelete} onUpdate={onUpdate}/>
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
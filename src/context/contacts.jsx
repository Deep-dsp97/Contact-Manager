import { createContext, useState } from "react";
import axios from "axios";

const ContactContext = createContext();

function Provider({children}){

    // Contact List Data
    const [ contacts, setContacts ] = useState([]);

    // Fetch Data on once on App load
    const fetchCurrentData = async () => {
        const response = await axios.get('http://localhost:3007/contacts');
            setContacts(response.data);
    }

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

        const updatedContacts = contacts.map((contact) => {
            if(contact.id == data.id){
                return response.data;
            }
            return contact;
        })
        
        setContacts(updatedContacts);
    }

    // Values to Share with entire App
    const valueToShare = {
        contacts: contacts,
        fetchCurrentData: fetchCurrentData,
        createContact: createContact,
        updateContactById:updateContactById,
        deleteContactById: deleteContactById,
    }

    return <ContactContext.Provider value={valueToShare}>{children}</ContactContext.Provider>
}

export { Provider };
export default ContactContext;
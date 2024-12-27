import { useState } from "react";
import useContactContexthook from "../hooks/use-contact-context-hook";

const ContactSearch = () => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const { searchFilter } = useContactContexthook();

  const handleSubmit = (event) =>{
    event.preventDefault();
    searchFilter(searchTerm);
  }

  const handleChange = (event) =>{
    setSearchTerm(event.target.value);
    searchFilter(searchTerm);
  }

  return (
    <form action="" className="seach-input-form d-flex align-items-center pt-xl-4 pb-xl-2 me-3 me-md-0" onSubmit={handleSubmit}>
        <label htmlFor="search" className="me-2">Search</label>
        <input value={searchTerm} onChange={handleChange} className="rounded py-2 py-md-1" type="text" name="search" id="search"/>
    </form>
  )
}

export default ContactSearch;
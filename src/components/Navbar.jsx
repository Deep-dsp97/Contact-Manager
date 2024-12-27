import useContactContexthook from "../hooks/use-contact-context-hook";
import CreateContact from "./CreateContact";
import ContactSearch from "./ContactSearch";

const Navbar = () => {

  const { setIsMobile, isMobile } = useContactContexthook(); 
  // Toggle Create Form Mobile Style function
  const toggleFormMobile = () => {
    setIsMobile(!isMobile);
  }

  return (
    <div className="sticky-top left-container pt-4 pt-xl-5">
      <div className="d-flex flex-column flex-md-row justify-content-md-between justify-content-xl-center align-items-center">
        <div className="d-flex flex-row flex-xl-column align-items-center">
          <img className="ms-3 ms-xl-0" src="/images/book-logo.png" alt="Book Logo" />
          <p className="app-title mt-2 ms-3 ms-xl-0 lh-1">Contact <br className="d-xl-none"/>Manager</p>
        </div>
        <div className="mt-3 mt-md-0 me-3 d-flex flex-column flex-sm-row align-item-center justify-content-end">
          <div className="d-xl-none">
            <ContactSearch/>
          </div>
          <button className="mt-3 mt-sm-0 ms-3 px-sm-3 custom-button-bg-fill py-sm-2 rounded d-xl-none" onClick={toggleFormMobile}>Add Contact</button>
        </div>
      </div>
      <hr className="w-100"/>
      {/* Creact Contact Form */}
      <CreateContact isMobile={isMobile}/>
    </div>
  )
}

export default Navbar
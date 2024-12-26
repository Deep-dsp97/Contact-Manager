import CreateContact from "./CreateContact";

const Navbar = () => {
  return (
    <div className="sticky-top left-container pt-5">
      <div className="d-flex flex-row flex-lg-column align-items-center">
          <img className="ms-3 ms-lg-0" src="/images/book-logo.png" alt="Book Logo" />
          <p className="app-title mt-2 ms-3 ms-lg-0">Contact Manager</p>
      </div>
      <hr className="w-100"/>
      {/* Creact Contact Form */}
      <CreateContact />
    </div>
  )
}

export default Navbar
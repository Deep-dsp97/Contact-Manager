import CreateContact from "./CreateContact";

const Navbar = ({onCreate}) => {
  return (
    <div className="sticky-top left-container pt-5">
      <div className="d-flex flex-row flex-lg-column align-items-center">
          <img src="/images/book-logo.png" alt="Book Logo" />
          <p className="app-title mt-2">Contact Manager</p>
          <hr className="w-100"/>
      </div>
      {/* Creact Contact Form */}
      <CreateContact onCreateContact={onCreate}/>
    </div>
  )
}

export default Navbar
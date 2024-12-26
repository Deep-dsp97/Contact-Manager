import { useContext } from "react";
import ContactContext from "../context/contacts";

const useContactContexthook = () => {
    return useContext(ContactContext);
}

export default useContactContexthook;
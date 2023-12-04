import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export const App = () => {
  const filter = useSelector(state => state.filter);

  return (
    <div style={{ padding: "35px" }}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {filter && <ContactList />}
      <Filter />
    </div>  
  );
};

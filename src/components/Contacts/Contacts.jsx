import { useDispatch, useSelector } from "react-redux";
import { Button, Text, List } from "./Contacts.styled";
import { remove } from "../../redux/contactSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.contactName.toLowerCase().includes(filter.toLowerCase()),
  );
  if (filteredContacts.length !== 0) {
  return (
    <List>
      {filteredContacts.map(({ id, contactName, number}) => (
        <li key={id}>
          <Text>{contactName}<br></br> {number}</Text>
          <Button type="button" onClick={( ) => dispatch(remove(id))}>Delete</Button>
        </li>
      ))}
    </List>)
  }
}

export default Contacts;
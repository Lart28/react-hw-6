import Contacts from "./Contacts";
import Filter from "./Filter";
import Form from "./Form";
import { Title, Title2 } from "./App.styled";

export default function App() {
  return (
      <>
        <Title>Phonebook</Title>
        <Form/>
        <Title2>Contacts</Title2>
        <Filter/>
        <Contacts/>
      </>
    )
}

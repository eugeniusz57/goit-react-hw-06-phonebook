import { ContactForm } from './ContactForm/ContactForm';
import { Container, Title, TitleSeccond } from './App.styled';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';

export const App = () => (
  <Container>
    <Title>Phonebook</Title>
    <ContactForm />
    <TitleSeccond>Contacts</TitleSeccond>
    <Filter />
    <ContactList />
  </Container>
);

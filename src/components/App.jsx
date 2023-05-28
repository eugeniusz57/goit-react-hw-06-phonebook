import { ContactForm } from './ContactForm/ContactForm';
import { Container, Title, TitleSeccond } from './App.styled';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { useTheme } from 'hooks/useTheme';

export const App = () => {
  const { _, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };
  return (
    <Container>
      <button variant="secondary" onClick={handleLightThemeClick}>
        Light
      </button>
      <button variant="secondary" onClick={handleDarkThemeClick}>
        Dark
      </button>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleSeccond>Contacts</TitleSeccond>
      <Filter />
      <ContactList />
    </Container>
  );
};

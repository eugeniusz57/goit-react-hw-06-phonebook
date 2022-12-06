import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/store';
import { ButtonDelete, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contactItems = useSelector(state => state.contacts.contact);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const findContact = () => {
    const toLowerFilter = filter.toLowerCase();
    return contactItems.filter(contact =>
      contact.name.toLowerCase().includes(toLowerFilter)
    );
  };

  return (
    <List>
      {contactItems.length > 0 ? (
        findContact().map(({ id, name, number }) => (
          <ListItem key={id}>
            <span>
              {name}: {number}
            </span>
            <ButtonDelete onClick={() => dispatch(deleteContact(id))}>
              ❌
            </ButtonDelete>{' '}
          </ListItem>
        ))
      ) : (
        <p>You don't have any contact</p>
      )}
    </List>
  );
};

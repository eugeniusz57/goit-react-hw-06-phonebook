import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { deleteContact } from 'redux/myContact';
import { ButtonDelete, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const findContact = () => {
    const toLowerFilter = filter.toLowerCase().trim();
    if (!toLowerFilter) {
      return contactsItems;
    }

    return contactsItems.filter(contact =>
      contact.name.toLowerCase().includes(toLowerFilter)
    );
  };

  return (
    <List>
      {findContact().length === 0 ? (
        <p>You don't have any contact</p>
      ) : (
        findContact().map(({ id, name, number }) => (
          <ListItem key={id}>
            <span>
              {name}: {number}
            </span>
            <ButtonDelete onClick={() => dispatch(deleteContact(id))}>
              ❌
            </ButtonDelete>
          </ListItem>
        ))
      )}
    </List>
  );
};

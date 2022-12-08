import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { deleteContact } from 'redux/myContactSlice';
import { ButtonDelete, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContacts);
  console.log('contactsItems+', contactsItems);
  const filter = useSelector(getStatusFilter);
  console.log('filter---', filter);
  const findContact = () => {
    const toLowerFilter = filter.toLowerCase().trim();
    if (!toLowerFilter) {
      return contactsItems;
    }

    return contactsItems.filter(item =>
      item.name.toLowerCase().includes(toLowerFilter)
    );
  };
  console.log('findContact', findContact());

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

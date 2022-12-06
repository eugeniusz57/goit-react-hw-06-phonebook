import {
  Label,
  Input,
  FormAddContact,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setfilter } from '../../redux/store';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setfilter(e.target.value));
  };

  return (
    <FormAddContact>
      <Label htmlFor="idLabelSearch">Find contact by name</Label>
      <Input
        id="idLabelSearch"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleFilterChange}
      />
    </FormAddContact>
  );
};

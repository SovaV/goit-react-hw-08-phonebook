import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/contacts/ContactActions';
import { getFilter } from '../redux/contacts/ContactSelector';
import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingNameCustom"
          placeholder="text"
          value={value}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
        <label htmlFor="floatingNameCustom"> Find contacts by name</label>
      </Form.Floating>
    </>
  );
};

export default Filter;

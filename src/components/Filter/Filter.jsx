import { useDispatch, useSelector } from 'react-redux';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from './Filter.styled';
import {setFilter } from 'redux/filterSlice';
import {getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleChange = (event) => {
    const { value } = event.target;

    
    dispatch(setFilter(value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          placeholder="Type a name to search"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </FilterLabel>
    </FilterContainer>
  );
};
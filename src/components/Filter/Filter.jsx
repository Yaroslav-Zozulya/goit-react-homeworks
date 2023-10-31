import { useDispatch } from 'react-redux';
import { changeFilterValue } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="search"
        onChange={e =>
          dispatch(changeFilterValue(e.target.value.toLowerCase().trim()))
        }
      />
    </>
  );
};

import { useDispatch, useSelector } from 'react-redux';

import { filtersActions } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <label className="search">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={event =>
          dispatch(filtersActions.changeFilter(event.target.value))
        }
      />
    </label>
  );
}

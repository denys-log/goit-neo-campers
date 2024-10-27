import { useId, useState } from 'react';
import Input from '../../../../components/Input/Input';
import { useDispatch } from 'react-redux';
import Icon from '../../../../components/Icon/Icon';
import FilterButton from '../../../../components/FilterButton/FilterButton';
import Button from '../../../../components/Button/Button';
import { catalogActions } from '../../../../redux/catalogSlice';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter/capitalizeFirstLetter';

export default function CatalogFilters() {
  const id = useId();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: '',
    equipments: {},
    type: '',
  });

  const handleChangeFilter = (filterName, value) => {
    if (filterName === 'location') {
      setFilters(prevState => ({
        ...prevState,
        location: value,
      }));
    }
    if (filterName === 'equipments') {
      setFilters(prevState => {
        const result = {
          ...prevState,
          equipments: { ...prevState.equipments },
        };
        if (result.equipments[value]) {
          delete result.equipments[value];
        } else {
          result.equipments[value] = true;
        }
        return result;
      });
    }
    if (filterName === 'type') {
      setFilters(prevState => ({
        ...prevState,
        type: prevState.type === value ? '' : value,
      }));
    }
  };

  const handleApplyFilters = () => {
    dispatch(catalogActions.setFilters(filters));
  };

  return (
    <div className="basis-[360px] shrink-0 mr-16">
      <label className="text-gray mb-2 inline-block" htmlFor={id}>
        Location
      </label>
      <Input
        value={filters.location}
        onChange={event => handleChangeFilter('location', event.target.value)}
        id={id}
        placeholder="City"
        icon={<Icon name="map" />}
        className="mb-10"
      />
      <strong className="text-text font-medium">Filters</strong>
      <h3 className="text-h3 mt-8">Vehicle equipment</h3>
      <hr className="my-6" />
      <ul className="flex flex-wrap gap-3">
        {EQUIPMENTS.map(item => (
          <li key={item.name}>
            <FilterButton
              onClick={() => handleChangeFilter('equipments', item.name)}
              icon={item.icon}
              name={capitalizeFirstLetter(item.name)}
              isActive={filters.equipments[item.name]}
            />
          </li>
        ))}
      </ul>
      <h3 className="text-h3 mt-8">Vehicle type</h3>
      <hr className="my-6" />
      <ul className="flex flex-wrap gap-3">
        {TYPES.map(item => (
          <li key={item.name}>
            <FilterButton
              onClick={() => handleChangeFilter('type', item.value)}
              icon={item.icon}
              name={item.label}
              isActive={filters.type === item.value}
            />
          </li>
        ))}
      </ul>
      <Button className="mt-10" onClick={handleApplyFilters}>
        Search
      </Button>
    </div>
  );
}

const EQUIPMENTS = [
  {
    name: 'AC',
    icon: 'wind',
  },
  {
    name: 'automatic',
    icon: 'diagram',
  },
  {
    name: 'kitchen',
    icon: 'cup',
  },
  {
    name: 'TV',
    icon: 'tv',
  },
  {
    name: 'bathroom',
    icon: 'shower',
  },
];

const TYPES = [
  {
    label: 'Van',
    icon: 'grid-1x2',
    value: 'panelTruck',
  },
  {
    label: 'Fully Integrated',
    icon: 'grid',
    value: 'fullyIntegrated',
  },
  {
    label: 'Alcove',
    icon: 'grid-3x3',
    value: 'alcove',
  },
];

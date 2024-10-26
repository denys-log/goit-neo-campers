import Button from '../../../../../../components/Button/Button';

export default function CatalogSidebarFilters() {
  return (
    <>
      <span>Filters</span>
      <strong>Vehicle equipment</strong>
      <hr />
      <ul>
        {EQUIPMENTS.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <strong>Vehicle type</strong>
      <hr />
      <ul>
        {TYPES.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <Button>Search</Button>
    </>
  );
}

const EQUIPMENTS = [
  {
    name: 'AC',
  },
  {
    name: 'Automatic',
  },
  {
    name: 'Kitchen',
  },
  {
    name: 'TV',
  },
  {
    name: 'Bathroom',
  },
];

const TYPES = [
  {
    name: 'Van',
  },
  {
    name: 'Fully Integrated',
  },
  {
    name: 'Alcove',
  },
];

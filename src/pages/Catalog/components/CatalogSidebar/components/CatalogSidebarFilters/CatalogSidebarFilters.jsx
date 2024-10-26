import Button from '../../../../../../components/Button/Button';
import FilterButton from '../../../../../../components/FilterButton/FilterButton';

export default function CatalogSidebarFilters() {
  return (
    <>
      <strong className="text-text font-medium">Filters</strong>
      <h3 className="text-h3 mt-8">Vehicle equipment</h3>
      <hr className="my-6" />
      <ul className="flex flex-wrap gap-3">
        {EQUIPMENTS.map(item => (
          <li key={item.name}>
            <FilterButton icon={item.icon} name={item.name} isActive={false} />
          </li>
        ))}
      </ul>
      <h3 className="text-h3 mt-8">Vehicle type</h3>
      <hr className="my-6" />
      <ul className="flex flex-wrap gap-3">
        {TYPES.map(item => (
          <li key={item.name}>
            <FilterButton icon={item.icon} name={item.name} isActive={false} />
          </li>
        ))}
      </ul>
      <Button className="mt-10">Search</Button>
    </>
  );
}

const EQUIPMENTS = [
  {
    name: 'AC',
    icon: 'wind',
  },
  {
    name: 'Automatic',
    icon: 'diagram',
  },
  {
    name: 'Kitchen',
    icon: 'cup',
  },
  {
    name: 'TV',
    icon: 'tv',
  },
  {
    name: 'Bathroom',
    icon: 'shower',
  },
];

const TYPES = [
  {
    name: 'Van',
    icon: 'grid-1x2',
  },
  {
    name: 'Fully Integrated',
    icon: 'grid',
  },
  {
    name: 'Alcove',
    icon: 'grid-3x3',
  },
];

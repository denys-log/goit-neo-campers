import Button from '../../../../components/Button/Button';
import CatalogItem from '../CatalogItem/CatalogItem';

export default function CatalogList({ items }) {
  return (
    <div className="flex-1">
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <CatalogItem item={item} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button variant="secondary" className="mt-2">
          Load more
        </Button>
      </div>
    </div>
  );
}

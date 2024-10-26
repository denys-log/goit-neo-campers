import CatalogItem from '../CatalogItem/CatalogItem';

export default function CatalogList({ items }) {
  return (
    <ul className="w-full">
      {items.map(item => (
        <li key={item.id}>
          <CatalogItem item={item} />
        </li>
      ))}
    </ul>
  );
}

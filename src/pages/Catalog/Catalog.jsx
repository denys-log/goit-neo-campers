import Header from '../../components/Header/Header';
import CatalogSidebar from './components/CatalogSidebar/CatalogSidebar';
import CatalogList from './components/CatalogList/CatalogList';

import data from './data.json';

export default function Catalog() {
  return (
    <>
      <Header />
      <div className="container mt-12">
        <div className="flex">
          <CatalogSidebar />
          <CatalogList items={data.items} />
        </div>
      </div>
    </>
  );
}

import CatalogSidebarLocation from './components/CatalogSidebarLocation/CatalogSidebarLocation';
import CatalogSidebarFilters from './components/CatalogSidebarFilters/CatalogSidebarFilters';

export default function CatalogSidebar() {
  return (
    <div className="w-[360px] mr-16">
      <CatalogSidebarLocation />
      <CatalogSidebarFilters />
    </div>
  );
}

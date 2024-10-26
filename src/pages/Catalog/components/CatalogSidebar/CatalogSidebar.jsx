import CatalogSidebarLocation from './components/CatalogSidebarLocation/CatalogSidebarLocation';
import CatalogSidebarFilters from './components/CatalogSidebarFilters/CatalogSidebarFilters';

export default function CatalogSidebar() {
  return (
    <div className="basis-[360px] shrink-0 mr-16">
      <CatalogSidebarLocation />
      <CatalogSidebarFilters />
    </div>
  );
}

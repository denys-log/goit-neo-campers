import Header from '../../components/Header/Header';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import CatalogFilters from './components/CatalogFilters/CatalogFilters';
import CatalogList from './components/CatalogList/CatalogList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCatalog, selectFilters } from '../../redux/selectors';
import { catalogActions } from '../../redux/catalogSlice';
import Button from '../../components/Button/Button';
import { fetchCatalog } from '../../redux/thunks';
import { Helmet } from 'react-helmet-async';

const LIMIT = 10;

export default function Catalog() {
  const dispatch = useDispatch();
  const { data, isLoading, isLoadingMore, isLoadMoreAvailable, currentPage } =
    useSelector(selectCatalog);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchCatalog({
        page: currentPage,
        limit: LIMIT,
        location: filters.location,
        type: filters.type,
        ...filters.equipments,
      })
    );
  }, [
    currentPage,
    dispatch,
    filters.equipments,
    filters.location,
    filters.type,
  ]);

  const handleFetchMore = () => {
    dispatch(catalogActions.setCurrentPage(currentPage + 1));
  };

  return (
    <>
      <Helmet>
        <title>Campers catalog</title>
        <meta
          name="description"
          content="You can find everything you want in our catalog"
        />
      </Helmet>
      <Header />
      <div className="container mt-12 pb-14">
        <div className="flex">
          <CatalogFilters />
          <QueryHandler isLoading={isLoading}>
            {data?.items.length ? (
              <div className="flex-1">
                <CatalogList items={data?.items} />

                {isLoadMoreAvailable ? (
                  <div className="flex justify-center">
                    <Button
                      variant="secondary"
                      className="mt-2"
                      onClick={handleFetchMore}
                      isLoading={isLoadingMore}
                    >
                      Load more
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : (
              'The catalog is empty'
            )}
          </QueryHandler>
        </div>
      </div>
    </>
  );
}

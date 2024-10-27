import Header from '../../components/Header/Header';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import CatalogSidebar from './components/CatalogSidebar/CatalogSidebar';
import CatalogList from './components/CatalogList/CatalogList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCatalog } from '../../redux/catalogOps';
import { selectCatalog } from '../../redux/selectors';
import { catalogActions } from '../../redux/catalogSlice';
import Button from '../../components/Button/Button';

const LIMIT = 10;

export default function Catalog() {
  const dispatch = useDispatch();
  const {
    data,
    error,
    isLoading,
    isLoadingMore,
    isLoadMoreAvailable,
    currentPage,
  } = useSelector(selectCatalog);

  useEffect(() => {
    dispatch(fetchCatalog({ page: currentPage, limit: LIMIT }));
  }, [currentPage, dispatch]);

  const handleFetchMore = () => {
    dispatch(catalogActions.setCurrentPage(currentPage + 1));
  };

  return (
    <>
      <Header />
      <div className="container mt-12 pb-14">
        <div className="flex">
          <QueryHandler isLoading={isLoading} isError={error}>
            <CatalogSidebar />
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

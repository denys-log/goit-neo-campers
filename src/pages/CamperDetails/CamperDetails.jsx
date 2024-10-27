import { Outlet, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Rating from '../../components/Rating/Rating';
import Price from '../../components/Price/Price';
import Location from '../../components/Location/Location';
import Tabs from '../../components/Tabs/Tabs';
import CamperDetailsGallery from './components/CamperDetailsGallery/CamperDetailsGallery';
import CamperDetailsContactForm from './components/CamperDetailsContactForm/CamperDetailsContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamper } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCamper } from '../../redux/thunks';
import QueryHandler from '../../components/QueryHandler/QueryHandler';

const TABS = [
  {
    name: 'Features',
    link: 'features',
  },
  {
    name: 'Reviews',
    link: 'reviews',
  },
];

export default function CamperDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, error } = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamper({ id: params.id }));
  }, [dispatch, params.id]);

  return (
    <>
      <Header />
      <div className="container mt-12 pb-20">
        <QueryHandler isLoading={isLoading} isError={error}>
          {data ? (
            <>
              <h1 className="text-h2 mb-2">{data.name}</h1>
              <div className="flex item-center mb-4">
                <Rating
                  rating={data.rating}
                  count={data.reviews.length}
                  className="mr-4"
                />
                <Location location={data.location} />
              </div>
              <Price price={data.price} className="mb-[28px]" />
              <CamperDetailsGallery photos={data.gallery} />
              <p className="mt-[28px] text-text">{data.description}</p>

              <Tabs list={TABS} />

              <div className="flex">
                <div className="flex-1">
                  <Outlet />
                </div>
                <div className="w-[641px]">
                  <CamperDetailsContactForm />
                </div>
              </div>
            </>
          ) : null}
        </QueryHandler>
      </div>
    </>
  );
}

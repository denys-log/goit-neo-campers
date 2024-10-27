import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Rating from '../../components/Rating/Rating';
import Price from '../../components/Price/Price';
import Location from '../../components/Location/Location';
import Tabs from '../../components/Tabs/Tabs';
import CamperDetailsGallery from './components/CamperDetailsGallery/CamperDetailsGallery';
import CamperDetailsContactForm from './components/CamperDetailsContactForm/CamperDetailsContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamper } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchCamper } from '../../redux/thunks';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import CamperDetailsFeatures from './components/CamperDetailsFeatures/CamperDetailsFeatures';
import CamperDetailsReviews from './components/CamperDetailsReviews/CamperDetailsReviews';
import { catalogActions } from '../../redux/catalogSlice';

const TABS = ['Features', 'Reviews'];

export default function CamperDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, error } = useSelector(selectCamper);
  const [activeTab, setActiveTab] = useState('Features');

  useEffect(() => {
    dispatch(fetchCamper({ id: params.id }));
    dispatch(catalogActions.reset());
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

              <Tabs activeTab={activeTab} list={TABS} onChange={setActiveTab} />

              <div className="flex">
                <div className="flex-1">
                  {activeTab === 'Features' ? (
                    <CamperDetailsFeatures />
                  ) : (
                    <CamperDetailsReviews />
                  )}
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

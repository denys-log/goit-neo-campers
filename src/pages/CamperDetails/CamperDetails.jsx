import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

import Button from '../../components/Button/Button';
import Rating from '../../components/Rating/Rating';
import Price from '../../components/Price/Price';
import Location from '../../components/Location/Location';
import Tabs from '../../components/Tabs/Tabs';
import { useNavigate } from 'react-router-dom';
import CamperDetailsGallery from './components/CamperDetailsGallery/CamperDetailsGallery';
import CamperDetailsContactForm from './components/CamperDetailsContactForm/CamperDetailsContactForm';

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
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container mt-12 pb-20">
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
      </div>
    </>
  );
}

const data = {
  id: '1',
  name: 'Road Bear C 23-25',
  price: 10000,
  rating: 4.5,
  location: 'Ukraine, Kyiv',
  description:
    'Embadventures, promising comfort, style, and the freedom to explore at your own pace.',
  form: 'alcove',
  length: '7.3m',
  width: '2.65m',
  height: '3.65m',
  tank: '208l',
  consumption: '30l/100km',
  transmission: 'automatic',
  engine: 'diesel',
  AC: true,
  bathroom: true,
  kitchen: false,
  TV: true,
  radio: true,
  refrigerator: false,
  microwave: true,
  gas: false,
  water: true,
  gallery: [
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/1-1.webp',
      original: 'https://ftp.goit.study/img/campers-test-task/1-1.webp',
    },
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/1-2.webp',
      original: 'https://ftp.goit.study/img/campers-test-task/1-2.webp',
    },
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/1-3.webp',
      original: 'https://ftp.goit.study/img/campers-test-task/1-3.webp',
    },
  ],
  reviews: [
    {
      reviewer_name: 'Alice',
      reviewer_rating: 5,
      comment:
        'Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!',
    },
    {
      reviewer_name: 'Bob',
      reviewer_rating: 4,
      comment:
        'Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.',
    },
  ],
};

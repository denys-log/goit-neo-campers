import clsx from 'clsx';
import FeaturesList from '../../components/FeaturesList/FeaturesList';
import { FEATURES_ICONS } from '../../constants/constants';

export default function FeaturesDetails() {
  const featuresList = Object.keys(FEATURES_ICONS).reduce((acc, feature) => {
    if (data[feature]) acc.push(feature);
    return acc;
  }, []);

  const INFO = [
    {
      label: 'Form',
      value: data.form,
    },
    {
      label: 'Length',
      value: data.length,
    },
    {
      label: 'Width',
      value: data.width,
    },
    {
      label: 'Height',
      value: data.height,
    },
    {
      label: 'Tank',
      value: data.tank,
    },
    {
      label: 'Consumption',
      value: data.consumption,
    },
  ];

  return (
    <div className="bg-inputs rounded-[10px] py-[44px] px-[52px] mr-10">
      <FeaturesList features={featuresList} />
      <h3 className="text-h3 mt-[100px]">Vehicle details</h3>
      <hr className="my-6" />
      <ul>
        {INFO.map(({ label, value }, idx) => (
          <li
            key={label}
            className={clsx('flex justify-between', {
              'mb-4': idx !== INFO.length - 1,
            })}
          >
            <span>{label}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
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

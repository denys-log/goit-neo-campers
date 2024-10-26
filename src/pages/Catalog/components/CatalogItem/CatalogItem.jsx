import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import Features from '../../../../components/Features/Features';
import Rating from '../../../../components/Rating/Rating';
import Location from '../../../../components/Location/Location';
import Price from '../../../../components/Price/Price';

const FEATURES = [
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
];

export default function CatalogItem({ item }) {
  const navigate = useNavigate();

  const features = FEATURES.reduce((acc, feature) => {
    if (item[feature]) acc.push(feature);
    return acc;
  }, []);

  return (
    <div className="border rounded-[20px] p-6 mb-8 flex items-start">
      <div className="w-[292px] h-[320px] rounded-[10px] overflow-hidden mr-6">
        <img src={item.gallery[0].thumb} alt={item.name} />
      </div>
      <div className="flex-1">
        <div className="flex">
          <h2>{item.name}</h2>
          {/* <strong>{item.price}</strong> */}
          <Price price={item.price} />
          <button>LIKE</button>
        </div>
        <div>
          <Rating rating={item.rating} count={item.reviews.length} />
          {/* <span>
            {item.rating} ({item.reviews.length} Reviews)
          </span> */}
          {/* <span>{item.location}</span> */}
          <Location location={item.location} />
        </div>
        <p className="truncate w-[800px]">{item.description}</p>
        <Features features={features} />
        <Button onClick={() => navigate(`/catalog/${item.id}`)}>
          Show more
        </Button>
      </div>
    </div>
  );
}

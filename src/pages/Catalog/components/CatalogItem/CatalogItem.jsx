import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import FeaturesList from '../../../../components/FeaturesList/FeaturesList';
import Rating from '../../../../components/Rating/Rating';
import Location from '../../../../components/Location/Location';
import Price from '../../../../components/Price/Price';
import LikeButton from '../../../../components/LikeButton/LikeButton';
import { FEATURES_ICONS } from '../../../../constants/constants';

export default function CatalogItem({ item }) {
  const navigate = useNavigate();

  const featuresList = Object.keys(FEATURES_ICONS).reduce((acc, feature) => {
    if (item[feature]) acc.push(feature);
    return acc;
  }, []);

  return (
    <div className="border rounded-[20px] p-6 mb-8 flex items-start">
      <div className="w-[292px] h-[320px] rounded-[10px] overflow-hidden mr-6">
        <img
          className="w-full h-full object-cover object-center"
          src={item.gallery[0].thumb}
          alt={item.name}
          width={292}
          height={320}
        />
      </div>
      <div className="flex-1">
        <div className="flex mb-2">
          <h2 className="text-h2 mr-auto">{item.name}</h2>
          <Price price={item.price} className="ml-2 mr-3" />
          <LikeButton />
        </div>
        <div className="flex mb-6">
          <Rating
            rating={item.rating}
            totalReviews={item.reviews.length}
            className="mr-4"
          />
          <Location location={item.location} />
        </div>
        <p className="truncate w-[525px] text-text mb-6">{item.description}</p>
        <FeaturesList features={featuresList} />
        <Button
          onClick={() => navigate(`/catalog/${item.id}`)}
          className="mt-6"
        >
          Show more
        </Button>
      </div>
    </div>
  );
}

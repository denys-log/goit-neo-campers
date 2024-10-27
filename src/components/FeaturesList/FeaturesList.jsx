import { getFeatureIconName } from '../../helpers/getFeatureIconName/getFeatureIconName';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import Icon from '../Icon/Icon';
import { FEATURES_ICONS } from '../../constants/constants';

export default function FeaturesList({ data }) {
  const list = Object.keys(FEATURES_ICONS).reduce((acc, feature) => {
    if (data[feature]) acc.push(feature);
    return acc;
  }, []);

  return (
    <ul className="flex flex-wrap gap-2">
      {list.map(feature => (
        <li
          key={feature}
          className={
            'flex items-center rounded-full py-3 px-[18px] font-medium bg-badges'
          }
        >
          {<Icon name={getFeatureIconName(feature)} className="mr-2" />}{' '}
          {capitalizeFirstLetter(feature)}
        </li>
      ))}
    </ul>
  );
}

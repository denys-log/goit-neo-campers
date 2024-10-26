import { getFeatureIconName } from '../../helpers/getFeatureIconName/getFeatureIconName';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import Icon from '../Icon/Icon';

export default function Features({ features }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {features.map(feature => (
        <li
          key={feature}
          className="flex items-center rounded-full py-3 px-[18px] bg-badges"
        >
          {<Icon name={getFeatureIconName(feature)} className="mr-2" />}{' '}
          {capitalizeFirstLetter(feature)}
        </li>
      ))}
    </ul>
  );
}

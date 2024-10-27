import clsx from 'clsx';
import Icon from '../Icon/Icon';

export default function Rating({ rating, totalReviews, className }) {
  return (
    <div className={clsx('flex items-center hover:underline', className)}>
      <Icon
        name="rating"
        size={16}
        className="mr-1 fill-rating relative -top-[1px]"
      />{' '}
      {rating} ({totalReviews} Reviews)
    </div>
  );
}

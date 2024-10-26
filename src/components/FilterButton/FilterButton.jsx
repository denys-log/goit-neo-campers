import clsx from 'clsx';
import Icon from '../Icon/Icon';

export default function FilterButton({ icon, name, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        'flex flex-col items-center justify-center font-medium',
        'w-[112px] h-[96px] rounded-xl',
        'border hover:border-gray transition-colors duration-200',
        {
          'border-button': isActive,
        }
      )}
    >
      <Icon name={icon} size={32} className="mb-2" />
      {name}
    </button>
  );
}

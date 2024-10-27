import clsx from 'clsx';
import Spinner from '../Spinner/Spinner';

export default function Button({
  type = 'button',
  onClick,
  variant = 'primary',
  className,
  isLoading,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'rounded-full py-4 px-14 font-medium inline-flex items-center justify-center transition-colors duration-300',
        {
          'bg-button hover:bg-button-hover text-white': variant === 'primary',
          'bg-transparent border hover:border-button-hover':
            variant === 'secondary',
        },
        className
      )}
      disabled={isLoading}
    >
      {children}
      {isLoading ? <Spinner size={24} /> : null}
    </button>
  );
}

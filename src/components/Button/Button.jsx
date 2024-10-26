import clsx from 'clsx';

export default function Button({
  type = 'button',
  onClick,
  variant = 'primary',
  className,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'rounded-full py-4 px-14 font-medium',
        {
          'bg-button hover:bg-button-hover text-white': variant === 'primary',
          // 'bg-gray-light': type === 'secondary',
        },
        className
      )}
    >
      {children}
    </button>
  );
}

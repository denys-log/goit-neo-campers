import clsx from 'clsx';

export default function Input({ field, form, ...props }) {
  return (
    <input
      {...field}
      {...props}
      className={clsx(
        'block w-full bg-inputs p-[18px] h-[60px] rounded-xl placeholder:text-gray text-main',
        {
          'border border-button':
            form.touched[field.name] && form.errors[field.name],
        },
        props.className
      )}
    />
  );
}

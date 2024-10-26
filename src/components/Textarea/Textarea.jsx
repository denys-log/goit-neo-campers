import clsx from 'clsx';

export default function Textarea({ field, ...props }) {
  return (
    <textarea
      {...field}
      {...props}
      className={clsx(
        'block w-full bg-inputs p-[18px] h-[118px] rounded-xl resize-none',
        props.className
      )}
    />
  );
}

import clsx from 'clsx';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function Datepicker({ field, form, ...props }) {
  return (
    <DatePicker
      selected={field.value}
      {...field}
      {...props}
      onChange={date => form.setFieldValue(field.name, date)}
      placeholderText={props.placeholder}
      minDate={new Date()}
      wrapperClassName="w-full"
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

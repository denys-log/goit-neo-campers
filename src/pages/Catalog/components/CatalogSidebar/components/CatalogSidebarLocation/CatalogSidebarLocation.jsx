import { useId, useState } from 'react';
import Input from '../../../../../../components/Input/Input';
import Icon from '../../../../../../components/Icon/Icon';

export default function CatalogSidebarLocation() {
  const id = useId();

  const [value, setValue] = useState('');

  return (
    <>
      <label className="text-gray mb-2 inline-block" htmlFor={id}>
        Location
      </label>
      <Input
        value={value}
        onChange={event => setValue(event.target.value)}
        id={id}
        placeholder="City"
        icon={<Icon name="map" />}
        className="mb-10"
      />
    </>
  );
}

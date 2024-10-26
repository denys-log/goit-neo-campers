import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const NAV = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/catalog',
    name: 'Catalog',
  },
];

export default function Header() {
  return (
    <header className="py-[26px] bg-inputs">
      <div className="container relative flex justify-center">
        <NavLink to="/" className="absolute top-1/2 -translate-y-1/2 left-0">
          <img src="./logo.svg" alt="TravelTrucks" />
        </NavLink>
        {NAV.map(({ route, name }) => (
          <NavLink
            key={name}
            to={route}
            className={({ isActive }) =>
              clsx('mx-4 leading-5 font-medium', {
                'text-button-hover': isActive,
              })
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

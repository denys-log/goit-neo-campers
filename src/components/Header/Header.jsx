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
    <header className="py-7 bg-inputs">
      <div className="container">
        <span className="text-3xl font-bold underline">Logo</span>
        {NAV.map(({ route, name }) => (
          <NavLink
            key={name}
            to={route}
            className={({ isActive }) => isActive && 'text-button-hover'}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

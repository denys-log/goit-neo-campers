import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function Tabs({ list }) {
  return (
    <ul className="mt-[60px] flex items-center border-b gap-10 mb-[44px]">
      {list.map(tab => (
        <li key={tab.link}>
          <NavLink
            to={tab.link}
            className={({ isActive }) =>
              clsx('text-h3 pb-6 block relative', {
                'after:absolute after:-bottom-[3px] after:left-0 after:right-0 after:h-[5px] after:bg-button':
                  isActive,
              })
            }
          >
            {tab.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

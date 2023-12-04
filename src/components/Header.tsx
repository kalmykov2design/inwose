import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {

}

export function Header(props: HeaderProps) {
  return (
    <div className='container mx-[auto] h-20 flex items-center justify-center'>
      <nav className='flex items-center justify-center gap-5'>
        <NavLink className={(navData) => (navData.isActive ? 'underline' : '')}  to={'/mytasks'}>Мои дела</NavLink>
        <NavLink className='hover:text-gray-600'  to={'/pari'}>Пари</NavLink>
        <NavLink className='hover:text-gray-600'  to={'/team'}>Команда</NavLink>
      </nav>
    </div>
  );
}

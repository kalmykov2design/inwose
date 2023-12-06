import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {

}

const headerItems = [
  {path: '/mytasks', text: 'Мои дела'},
  {path: '/pari', text: 'Пари'},
  {path: '/team', text: 'Команда'},
]

export function Header(props: HeaderProps) {
  return (
    <header className='container mx-[auto] h-20 flex items-center justify-center'>
      <nav className='flex items-center justify-center gap-5'>
        {headerItems.map(item => (
          <NavLink className={(navData) => ((navData.isActive ? 'px-3 py-1 rounded-[4px] bg-gray-100' : 'px-3 py-1 rounded-[4px]'))}  to={item.path} key={`header-${item.path}`}>{item.text}</NavLink>
        ))}
      </nav>
    </header>
  );
}

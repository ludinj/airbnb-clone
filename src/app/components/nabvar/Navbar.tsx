'use client';
import { FC } from 'react';
import Container from '@/components/Container';
import Logo from './Logo';
import Search from './Search';
import { SafeUser } from '../../types';
import UserMenu from './UserMenu';
import Categories from './Categories';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div
            className='
          flex 
          flex-row
          justify-between
          gap-3
          md:gap-0 '
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;

import React from 'react';
import { MenuIcon,XIcon } from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <div className='w-screen h-[80px] bg-zinc-200 drop-shadow-lg fixed z-10'>
            <MenuIcon className='w-6'/>
        </div>
    );
};

export default Navbar;
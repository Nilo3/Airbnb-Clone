'use client';

import React from 'react'
import Container from '../Container'
import Categories from './Categories'
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from './UserMenu'

const NavBar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='
        py-4
        border-b-[1px]
        '>
         <Container>
            <div
                className='
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                '>
                    <Logo />
                    <Search />
                    <UserMenu />
            </div>
         </Container>
        </div>
        <Categories/>
    </div>
  )
}

export default NavBar

import React from 'react'
import { Container, LogoutBtn,Logo } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  
  const navItem = [
    {
      name: 'Home',
      url: '/',
      active: true,
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      url: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      url: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      url: "/add-post",
      active: authStatus,
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {
              navItem.map((item) => 
                item.active ?
                  (<li key={item.name}>
                    <button
                      onClick={() => navigate(item.url)}
                      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                      >
                      {item.name}
                    </button>
                  </li>) : null
              )
            }

            {
              authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )
            }
          </ul>
          
          
        </nav>
      </Container>
    </header>
  )
}

export default Header
import React, { useEffect, useState } from "react";
import tw, { css } from "twin.macro";
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { Link } from "react-router-dom";
import Axios from 'axios';

const MenuList = tw.div`
  flex justify-end mr-20
`

const Logout = tw.div`
  flex items-center justify-center
  text-xl
  cursor-pointer
`

const Login = tw.div`
  flex items-center justify-center
  text-xl
  cursor-pointer
`

const NavBar = () => {
  const [auth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setAuth(true);
    }
  })

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    Axios.post(`${process.env.REACT_SERVER_DOMAIN}/api/v1/users/auth/logout/`, token)
    .then(() => {
      localStorage.clear()
      window.location.replace('/')
    });
  }

  return (
    <MenuList>
      { auth
        ? 
        <Logout onClick={handleLogout}>
          <IoLogOut /> 로그아웃
        </Logout>
        :
        <Link to='/login'>
          <Login>
            <IoLogIn /> 로그인
          </Login>
        </Link>

      }

    </MenuList>
  );
};

export default NavBar;
"use client";

import React from 'react';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const MenuSidebar = () => {
  const router = useRouter()
  const logoutHandler = () => {
    router.push('/');
  }
  return (
    <div className="menu-sidebar">
      <ul>
        {/* {routeConfig.children.map((child, index) => (
          <li key={index}>
            <Link to={child.path}>{ child.id }</Link>
          </li>
        ))} */}
      </ul>
      <Button btnType="submit" text="Logout" onClickEvent={logoutHandler} />
    </div>
  );
};

export default MenuSidebar;

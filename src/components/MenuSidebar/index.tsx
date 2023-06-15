"use client";

import React from 'react';
import Button from '../Button';
import { useRouter } from 'next/navigation';
import { routes } from '@/src/routes';
import Link from 'next/link';

const MenuSidebar = () => {
  const router = useRouter()
  const logoutHandler = () => {
    event?.preventDefault()
    router.push('/');
  }
  return (
    <div className="menu-sidebar">
      <ul>
        {routes.map((child, index) => (
          <li key={index}>
            <Link href={child.path}>{ child.name }</Link>
          </li>
        ))}
      </ul>
      <Button btnType="submit" text="Logout" onClickEvent={logoutHandler} />
    </div>
  );
};

export default MenuSidebar;

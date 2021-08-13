import React, { ReactNode } from "react";

const Header = (
  { children } : { children: ReactNode }
) => {
  return (
    <header>
      <div>
        <span>My App</span>
        {
          !children &&
          <form><input type="search" /></form>
        }
        <div>
          <span>Username</span>
          <img src="#" />
        </div>
      </div>
      {children}
    </header>
  )
}

export default Header;

import React from "react";

const Navbar = () => {
  const navitems = [
    {
      id: 1,
      list: "Jobs",
    },
    {
      id: 2,
      list: "Companies",
    },
    {
      id: 3,
      list: "Contact",
    },
    {
      id: 4,
      list: "Blog",
    },
    {
      id: 5,
      list: "Login",
    },
    {
      id: 6,
      list: "Register",
    },
  ];
  return (
    <div className="navBar flex justify-between items-center p-[3 rem]">
      <div className="logo text-[25px] text-blueColor">
        <strong>Find</strong>Job
      </div>
      <div className="menu flex gap-8">
        {navitems.map((items) => (
          <li
            key={items.id}
            className="menuList text-[#6f6f6f] hover:text-blueColor"
          >
            {items.list}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
  } from "react-icons/fa";
  import { NavLink } from "react-router-dom";
  import React, { useState, useEffect, useRef } from "react";
  
  const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
  
    const [userData, setUserdata] = useState([]);
    useEffect(() => {
      const getUserdata = async () => {
        const reqData = await fetch("http://localhost:5000/api/user");
        const resData = await reqData.json();
        setUserdata(resData);
        //   console.log(resData);
      };
      getUserdata();
    }, []);
    const menuItem = [
      {
        path: "/",
        name: "Dashboard",
        icon: <FaTh />,
      },
      {
        path: "/about",
        name: "About",
        icon: <FaUserAlt />,
      },
      {
        path: "/analytics",
        name: "Analytics",
        icon: <FaRegChartBar />,
      },
      {
        path: "/comment",
        name: "Comment",
        icon: <FaCommentAlt />,
      },
      {
        path: "/product",
        name: "Product",
        icon: <FaShoppingBag />,
      },
      {
        path: "/productList",
        name: "Product List",
        icon: <FaThList />,
      },
    ];
    return (
      <div className="container">
        {userData.map((userData, index) => (
          <div key={index}>
            {userData.moduletitle}
            {userData.modulename}
          </div>
        ))}
        <div style={{ width: isOpen ? "315px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Classes
            </h1>
            <div
              style={{ marginLeft: isOpen ? "200px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle}></FaBars>
            </div>
          </div>
          {userData.map((userData, index) => (
            <NavLink to="/" key={index} className="link">
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {userData.moduletitle}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Sidebar;
  
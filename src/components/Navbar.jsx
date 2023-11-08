import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Typography, Avatar } from "antd";
import icon from "../images/cryptocurrency.png";
import { useAuth0 } from "@auth0/auth0-react";

import {
  HomeOutlined,
  LoginOutlined,
  BulbOutlined,
  FundOutlined,
  LogoutOutlined,
  BugOutlined,
} from "@ant-design/icons";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoApp</Link>
        </Typography.Title>

        {screenSize < 800 && (
          <button class="btn" onClick={() => setActiveMenu(!activeMenu)}>
            <span class="icon">
              <svg viewBox="0 0 175 80" width="40" height="40">
                <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect
                  y="30"
                  width="80"
                  height="15"
                  fill="#f0f0f0"
                  rx="10"
                ></rect>
                <rect
                  y="60"
                  width="80"
                  height="15"
                  fill="#f0f0f0"
                  rx="10"
                ></rect>
              </svg>
            </span>
            <span class="text">MENU</span>
          </button>
        )}
      </div>

      {activeMenu && (
        <Menu theme="dark">
          {isAuthenticated && activeMenu && (
            <img
              className="profilePicture"
              alt="UserImage"
              src={user.picture}
            />
          )}
          {isAuthenticated && activeMenu && (
            <Menu.Item>
              <h5 className="profileText">Hello, {user.name}!</h5>
            </Menu.Item>
          )}
          {!isAuthenticated && activeMenu && (
            <Menu.Item icon={<LoginOutlined />}>
              <button className="logButton" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </Menu.Item>
          )}

          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
          <Menu.Item icon={<BugOutlined />}>
            <Link to="/feedback">Feedback</Link>
          </Menu.Item>

          {isAuthenticated && activeMenu && (
            <Menu.Item icon={<LogoutOutlined />}>
              <button className="logButton" onClick={() => loginWithRedirect()}>
                Log Out
              </button>
            </Menu.Item>
          )}
        </Menu>
      )}
    </div>
  );
}

export default Navbar;

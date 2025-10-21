import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="header-container">
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/images/logo.svg" alt="logo" />
        </NavLink>
      </div>
      <div className="mobile-search">
        <input type="search" placeholder="ابحث هنا..." />
      </div>
      <div className="mobile-login">
        <NavLink to="/login" onClick={closeMenu}>
          link
        </NavLink>
      </div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
      </div>
      <ul className={`nav ${menuOpen ? "open" : ""}`}>
      </ul>
      <div className="header-button">
        <NavLink to="/login" className="btn-delete">
          <span>تسجيل الدخول</span>
        </NavLink>
        <NavLink to="/category" className="btn-add">
          <span>اضف عرضك</span>
        </NavLink>
      </div>
    </div>
  );
};
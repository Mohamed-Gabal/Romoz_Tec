import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { MdFavoriteBorder } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col footer-logo">
          <Link to="/" className="footer-logo-link">
            <img
              src="/images/logo.svg"
              alt="Mashii Logo"
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-desc">
            مع ماشي… كل شيء أقرب إليك! اعرض منتجاتك، ابحث عن أفضل العروض، وتواصل
            مباشرة مع المشترين والبائعين بكل سهولة وأمان.
          </p>
        </div>
        <div className="footer-col footer-links">
          <h3 className="footer-title">الخدمات</h3>
          <ul>
            <li>
              <a href="#">التوصيل الالكتروني</a>
            </li>
            <li>
              <a href="#">الاعلام الرقمي</a>
            </li>
            <li>
              <a href="#">التسويق عبر وسائل التواصل</a>
            </li>
            <li>
              <a href="#">التسويق عبر المؤثرين</a>
            </li>
            <li>
              <a href="#">التسويق عبر محركات البحث</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-policies">
          <h3 className="footer-title">عن تواصل</h3>
          <ul>
            <li>
              <a href="#">من نحن</a>
            </li>
            <li>
              <a href="#">نظام النقاط والعضوية</a>
            </li>
            <li>
              <a href="#">اكتب معنا</a>
            </li>
            <li>
              <a href="#">سياسة الخصوصية</a>
            </li>
            <li>
              <a href="#">شروط الخدمة</a>
            </li>
            <li>
              <a href="#">تواصل معنا</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-social">
          <h3 className="footer-title">تابعنا</h3>
          <div className="social-icons">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© جميع الحقوق محفوظة - ماشي 2025</p>
      </div>
      {/* Navbar */}
      <div className="nav-footer">
        <Link to='/'>
          <MdOutlineHome />
          <span>الرئيسيه</span>
        </Link>
        <Link>
          <MdFavoriteBorder />
          <span>المفضله</span>
        </Link>
        <Link to="/advertisements">
          <IoMdAdd className="active-icon"/>
          <span>اضافه عرض</span>
        </Link>
        <Link>
          <IoNotificationsOutline />
          <span>الاشعارات</span>
        </Link>
        <Link>
          <TiMessage />
          <span>الرسائل</span>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;

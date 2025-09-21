import React from "react";
import "./register.css";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-image">
          <img src="/images/login.png" alt="Register" />
        </div>

        {/* محتوى الريجستر */}
        <div className="register-content">
          <h2>إنشاء حساب جديد</h2>
          <p>
            سجّل حسابك الآن على ماشي لتتصفح الإعلانات بسهولة وتعرض منتجاتك أو
            خدماتك في المكان المناسب، بسرعة وأمان.
          </p>
          <form className="register-form">
            <div className="input-group">
              <FaUser className="icon" />
              <input type="text" placeholder="الاسم الكامل" />
            </div>
            <div className="input-group">
              <BiMessageRounded className="icon" />
              <input type="email" placeholder="بريدك الإلكتروني" />
            </div>
            <div className="input-group">
              <IoCallOutline className="icon" />
              <input type="text" placeholder="رقم الجوال" />
            </div>
            <div className="input-group">
              <AiOutlineEye className="icon" />
              <input type="password" placeholder="كلمة المرور" />
            </div>
            <div className="input-group">
              <AiOutlineEye className="icon" />
              <input type="password" placeholder="تأكيد كلمة المرور" />
            </div>
            <div className="input-group">
              <FaCity className="icon" />
              <select>
                <option>اختر مدينتك</option>
                <option>القاهرة</option>
                <option>الرياض</option>
                <option>دبي</option>
                <option>الكويت</option>
              </select>
            </div>

            <button type="submit" className="regis_button">إنشاء حساب</button>
          </form>
          <p className="register-footer">
            هل لديك حساب بالفعل؟ <Link to="/">تسجيل دخول</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

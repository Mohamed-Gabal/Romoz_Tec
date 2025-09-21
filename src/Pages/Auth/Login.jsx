import React, { useState } from "react";
import "./login.css";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <div className="login-image">
        <img src="/images/login.png" alt="login" />
      </div>
      <div className="login-container">
        <h2>مرحبًا بك مجددًا</h2>
        <p>
          مرحبًا بك من جديد! قم بتسجيل الدخول إلى حسابك على ماشي لتتابع إعلاناتك
          المنشورة، وتدير منتجاتك أو خدماتك بسهولة.
        </p>
        <form className="login-form">
          {/* رقم الجوال */}
          {/* البريد الإلكتروني */}
          <div className="input-group">
            <BiMessageRounded className="input-icon" />
            <input type="email" placeholder="أدخل بريدك الإلكتروني" />
          </div>
          {/* كلمة المرور */}
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="أدخل كلمة المرور"
            />
            <span className="input-icon eye" onClick={togglePassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button type="submit" className="login_button">
            تسجيل دخول
          </button>
        </form>
        <p className="login-footer">
          ليس لديك حساب بعد؟ <Link to="/register">إنشاء حساب</Link>
        </p>
        <p className="login-footer">
          <Link to="/forgotPassword">نسيت كلمة المرور؟</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;

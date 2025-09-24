
import React, { useState } from "react";
import "./register.css";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const registerPassword = () => {
    setShowPassword(!showPassword);
  }
  const navigate = useNavigate();

  // state عشان  اعرف القيم اللي المستخدم بيكتبها في الفورم
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  // الدالة دي بتشتغل لما المستخدم يضغط submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع تحديث الصفحة الافتراضي

    // شرط للتأكد إن كلمة المرور وتأكيدها متطابقين
    if (formData.password !== formData.password_confirmation) {
      alert("كلمات المرور غير متطابقة");
      return;
    }

    try {
      // إرسال البيانات للـ API
      const response = await fetch("https://api.mashy.sand.alrmoz.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // تحويل البيانات من object لـ JSON
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // لو التسجيل نجح → تحويل المستخدم لصفحة تسجيل الدخول
        navigate("/login");
      } else {
        // لو حصل خطأ من السيرفر → عرض الرسالة
        alert(data.message || "حدث خطأ أثناء التسجيل");
      }
    } catch (error) {
      // لو حصل خطأ في الاتصال بالسيرفر أو أي مشكلة
      console.error("Error:", error);
      alert("حدث خطأ أثناء التسجيل");
    }
  };

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

          {/* ربطنا الفورم بالدالة handleSubmit */}
          <form className="register-form" onSubmit={handleSubmit}>
            {/* الاسم الكامل */}
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={formData.name} // ربط القيمة بالـ state
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} // تحديث الـ state
              />
            </div>

            {/* البريد الإلكتروني */}
            <div className="input-group">
              <BiMessageRounded className="icon" />
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* رقم الجوال */}
            <div className="input-group">
              <IoCallOutline className="icon" />
              <input
                type="number"
                placeholder="رقم الجوال"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* كلمة المرور */}
            <div className="input-group">
              <AiOutlineEye className="icon" onClick={registerPassword} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* تأكيد كلمة المرور */}
            <div className="input-group">
              <AiOutlineEye className="icon" onClick={registerPassword} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="تأكيد كلمة المرور"
                value={formData.password_confirmation}
                onChange={(e) =>
                  setFormData({ ...formData, password_confirmation: e.target.value })
                }
              />
            </div>

            {/* زر إنشاء الحساب */}
            <button type="submit" className="regis_button">
              إنشاء حساب
            </button>
          </form>

          {/* رابط تسجيل الدخول */}
          <p className="register-footer">
            هل لديك حساب بالفعل؟ <Link to="/login">تسجيل دخول</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;


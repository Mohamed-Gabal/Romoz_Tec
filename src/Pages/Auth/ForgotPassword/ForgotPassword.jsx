import "./forgotPassword.css";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>تحقق من الكود</h2>
        <div className="verify-box">
          <CgMail className="verify-icon" />
          <p>
            أدخل رمز التحقق المرسل إلى: <b>a*****@gmail.com</b>
          </p>
        </div>
        <form className="login-form">
          <div className="otp-inputs"></div>
          <button type="submit" className="login_button">
            تأكيد الرمز
          </button>
        </form>
        <div className="login-footer">
          <p>
            إعادة الإرسال خلال <span>00:60</span>
          </p>
          <Link to="/resetPassword">أعد إرسال الرمز</Link>
          <br />
          <a href="/contact">تواجه مشكلة؟ تواصل معنا</a>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;

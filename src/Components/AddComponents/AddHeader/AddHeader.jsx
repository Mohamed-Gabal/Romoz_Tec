import React from 'react';
import "./AddHeader.css"

export default function AddHeader({ currentStep }) {
  const steps = ["الفئة", "المعلومات", "الصور", "الموقع", "بيانات البائع", "تأكيد"];

  return (
    <div className='addHeaderContainer'>
      <header className='addHeader'>
        <h1>أضف إعلانك الآن</h1>
        <p>املأ البيانات التالية ليظهر إعلانك للآلاف من المشترين خلال دقائق</p>
      </header>

      <div className="header_container">
        <div className="line" />
        {steps.map((label, index) => (
          <div key={index} className={`category ${currentStep > index + 1 ? "active_Header" : ""}`}>
            <div className="big_circle">
              <div className="border_circle">
                <img src="./advertisements/CheckCircle.svg" alt="CheckCircle" className={currentStep > index + 1 ? "" : "Check_none"} />
              </div>
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

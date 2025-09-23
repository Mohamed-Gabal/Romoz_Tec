import React, { useState } from 'react';
import "./SellerData.css"

export default function SellerData() {
    const [toggles, setToggles] = useState(true);
    const handleToggle = () => {
        setToggles(!toggles);
    };
    return (
        <div className="sellerData_container">
            <header className='sellerData_header'>
                <h3>معلومات البائع</h3>
                <p>أضف بياناتك للتواصل مع المشترين</p>
            </header>

            <div className="input_container">
                <label htmlFor="sellerName">الاسم*</label>
                <input type="text" name="sellerName" id="sellerName" className='sellerName_input input' placeholder='أدخل اسمك' />
            </div>

            <div className="input_container">
                <label htmlFor="sellerPhone">رقم الجوال*</label>
                <input type="text" name="sellerPhone" id="sellerPhone" className='sellerPhone_input input' placeholder='05xxxxxxxxxx' />
            </div>

            <div className="webMessage_item">
                <div className="text">
                    <h4>السماح بالرسائل عبر الموقع</h4>
                    <p>يمكن للمشترين التواصل معك عبر نظام الرسائل الداخلي</p>
                </div>
                <label className="switch">
                    <input
                        type="checkbox"
                        name='webMessage'
                        id='webMessage'
                        checked={toggles}
                        onChange={() => handleToggle()}
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

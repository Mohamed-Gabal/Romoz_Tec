import React from 'react';
import "./Location.css";

export default function Location() {
    return (
        <div className="location_container">
            <div className="location_header">
                <h3>الموقع</h3>
                <p>حدد موقع الإعلان</p>
            </div>

            <div className="input_container">
                <label htmlFor="addressDetail">العنوان بالتفصيل*</label>
                <input type="text" name="addressDetail" id="addressDetail" className='addressDetail_input input' placeholder='أدخل عنوان واضح' />
            </div>

            <div className="input_container">
                <label htmlFor="city">المدينة*</label>
                <input type="text" name="city" id="city" className='city_input input' placeholder='اختر االمدينة' />
            </div>
            
            <div className="input_container">
                <label htmlFor="area">المنطقة*</label>
                <input type="text" name="area" id="area" className='area_input input' placeholder='اختر منطقتك' />
            </div>
        </div>
    )
}

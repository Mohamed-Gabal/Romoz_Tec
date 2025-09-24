import React from 'react';
import "./CarForm.css";

export default function CarForm() {
    return (
        <div className="category_information">
            <div className="">
                <div className="input_container">
                    <label htmlFor="brand">الماركة*</label>
                    <input type="text" name="brand" id="brand" className='brand_input input' placeholder='أدخل الماركة' />
                </div>

                <div className="input_container">
                    <label htmlFor="model">الموديل*</label>
                    <input type="text" name="model" id="model" className='model_input input' placeholder='أدخل الموديل' />
                </div>
            </div>
        </div>
    )
}

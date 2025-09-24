import React from 'react';
import "./CarForm.css";

export default function CarForm() {
    return (
        <div className="category_information">
            <header className='section_header'>
                <div className="right_div">
                    {/* img */}
                    <div className="img_container">
                        <span>القسم</span>
                        <div className="img_avatar">
                            <img src="/advertisements/car.svg" alt="car" className='' />
                        </div>
                    </div>

                    <div className="text">
                        <h1>السيارات وقطع الغيار</h1>
                        <p>سيارات ومركبات وقطع غيار السيارات للبيع</p>
                    </div>
                </div>

                <button type='button' className="btn_category">تغيير</button>
            </header>

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

import React, { useState } from 'react';
import "./Information.css";
import CarForm from '../../../Components/AddComponents/CarForm/CarForm';

export default function Information() {
    const [toggles, setToggles] = useState(true);
    const handleToggle = () => {
        setToggles(!toggles);
    };

    return (
        <div className="information_container">
            <div className="basicData">
                <header className='information_header'>
                    <div className="circle">
                        1
                    </div>
                    <div className="text">
                        <h1>البيانات الأساسية</h1>
                        <p>ادخل عنوان و وصف واضح للإعلان</p>
                    </div>
                </header>

                <div className="input_container">
                    <label htmlFor="adTitle">عنوان الإعلان*</label>
                    <input type="text" name="adTitle" id="adTitle" className='adTitle_input input' placeholder='أدخل عنوان واضح' />
                </div>

                <div className="textarea_container">
                    <label htmlFor="adDescription"> الوصف*</label>
                    <textarea type="text" name="adDescription" id="adDescription" rows={3} className='adDescription_input input' placeholder='أدخل وصفك هنا...' />
                </div>

                <div className="">
                    <div className="inputPrice_container">
                        <label htmlFor="adPrice"><span>السعر (ريال سعودي)</span> <span className='main_text'> (اختياري)</span></label>
                        <input type="text" name="adPrice" id="adPrice" className='adPrice_input input' placeholder='أدخل سعرك هنا' />
                        <span>ر.س</span>
                    </div>

                    <div className="list-item">
                        <p>التفاوض علي السعر</p>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={toggles}
                                onChange={() => handleToggle()}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <CarForm/>
        </div>
    )
}

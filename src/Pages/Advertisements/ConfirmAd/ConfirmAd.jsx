import React from 'react';
import "./ConfirmAd.css"

export default function ConfirmAd() {
    return (
        <div className="confirmAd_container">
            <header className='confirmAd_header'>
                <h3>مراجعة الإعلان</h3>
                <p>راجع إعلانك قبل نشره</p>
            </header>

            <div className="information_ad">
                <ul className='info_list'>
                    <li>
                        <h4>القسم/الفئة:</h4>
                        <p>السيارات وقطع الغيار</p>
                    </li>
                    <li>
                        <h4>عنوان الإعلان:</h4>
                        <p>السيارات وقطع الغيار</p>
                    </li>
                    <li>
                        <h4>السعر:</h4>
                        <p>150 ريال سعودي</p>
                    </li>
                    <li>
                        <h4>عدد الصور:</h4>
                        <p>2</p>
                    </li>
                    <li>
                        <h4>الموقع:</h4>
                        <p>جدة, العليا</p>
                    </li>
                    <li>
                        <h4>البائع:</h4>
                        <p>احمد عمر</p>
                    </li>
                </ul>
            </div>

            <div className="btn_confirmAd">
                <button type='button' className='btn'>
                    <span>انشر إعلانك الأن</span>
                    <img src="./advertisements/Plus.svg" alt="Plus" />
                </button>
                <p>بنشر إعلانك، أنت توافق على سياسة الاستخدام وشروط الخدمة</p>
            </div>
        </div>
    )
}

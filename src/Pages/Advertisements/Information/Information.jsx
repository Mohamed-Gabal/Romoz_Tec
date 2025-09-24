import React, { useState } from 'react';
import "./Information.css";
import CarForm from '../../../Components/AdvertisementsComponents/CarForm/CarForm';

export default function Information({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;

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
                    <label htmlFor="adTitle">عنوان الإعلان*
                        {errors.information?.adTitle && touched.information?.adTitle && (
                            <div className="info_error">{errors.information.adTitle}</div>
                        )}
                    </label>
                    <input
                        type="text"
                        name="information.adTitle"
                        value={values.information.adTitle}
                        onChange={(e) => setFieldValue("information.adTitle", e.target.value)}
                        onBlur={handleBlur}
                        id="adTitle"
                        className='adTitle_input input'
                        placeholder='أدخل عنوان واضح'
                    />
                </div>

                <div className="textarea_container">
                    <label htmlFor="adDescription"> الوصف*
                        {errors.information?.adDescription && touched.information?.adDescription && (
                            <div className="info_error">{errors.information.adDescription}</div>
                        )}
                    </label>
                    <textarea
                        type="text"
                        name="information.adDescription"
                        value={values.information.adDescription}
                        onChange={(e) => setFieldValue("information.adDescription", e.target.value)}
                        onBlur={handleBlur}
                        id="adDescription"
                        rows={3}
                        className='adDescription_input input'
                        placeholder='أدخل وصفك هنا...'
                    />
                </div>

                <div className="inputPrice_container">
                    <div className="inputPrice">
                        <label htmlFor="adPrice"><span>السعر (ريال سعودي)</span> <span className='main_text'> (اختياري)</span></label>
                        <input
                            type="text"
                            name="information.adPrice"
                            value={values.information.adPrice}
                            onChange={(e) => setFieldValue("information.adPrice", e.target.value)}
                            onBlur={handleBlur}
                            id="adPrice"
                            className='adPrice_input input'
                            placeholder='أدخل سعرك هنا' />
                        <span>ر.س</span>
                        {errors.information?.adPrice && touched.information?.adPrice && (
                            <div className="info_error">{errors.information.adPrice}</div>
                        )}
                    </div>

                    {values?.information?.adPrice && !errors.information?.adPrice && (
                        <div className="switch-item">
                            <p>التفاوض علي السعر</p>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="information.isNegotiable"
                                    checked={values.information.isNegotiable}
                                    onChange={(e) => { setFieldValue("information.isNegotiable", e.target.checked) }}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>)
                    }
                </div>
            </div>

            <CarForm />
        </div>
    )
}

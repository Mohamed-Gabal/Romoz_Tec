import React, { useState } from 'react'
import AddHeader from '../../Components/AddComponents/AddHeader/AddHeader';
import Category from './Category/Category';
import './style.css'
import Information from './Information/Information';
import UploadImages from './UploadImages/UploadImages';
import Location from './Location/Location';
import SellerData from './SellerData/SellerData';
import ConfirmAd from './ConfirmAd/ConfirmAd';
import { validationSchemas } from "./validationSchemas";
import { useFormik } from 'formik';

export default function Advertisements() {
    // Step management: 1=category, 2=details, 3=review
    const [step, setStep] = useState(1);

    const formik = useFormik({
        initialValues: {
            category: "",
            information: {
                adTitle: "",
                adDescription: "",
                adPrice: "",
                isNegotiable: true,
            },
            images: [],
            location: {
                detailedAddress: "",
                city: "",
                area: "",
            },
            seller: {
                name: "",
                phone: "",
                webMessage: true,
            },
        },
        validationSchema: validationSchemas[step],
        onSubmit: (values) => {
            console.log("البيانات النهائية:", values);
            alert("تم إرسال الإعلان بنجاح");
        },
        validateOnChange: true,
        validateOnBlur: true,
    });

    const nextStep = async () => {
        try {
            await validationSchemas[step].validate(formik.values, { abortEarly: false });
            if (step < 6) setStep(step + 1);
        } catch (err) {
            if (err.inner) {  // ← كده نتأكد إنه Yup error
                err.inner.forEach((e) => {
                    formik.setFieldError(e.path, e.message);
                    formik.setFieldTouched(e.path, true, false);
                });
            } else {
                console.error(err); // أي error تاني نطبعه بس
            }
        }
    };


    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className='Advertisements'>
            {/* header */}
            <AddHeader currentStep={step} />

            {/* الخطوة الأولى */}
            {step === 1 && (
                <Category formik={formik} />
            )}

            {/* المعلومات  */}
            {step === 2 && (
                <Information formik={formik} />
            )}

            {/* رفع الصور */}
            {step === 3 && (
                <UploadImages formik={formik} />
            )}

            {/* رفع الموقع */}
            {step === 4 && (
                <Location formik={formik} />
            )}

            {/* بيانات البائع */}
            {step === 5 && (
                <SellerData formik={formik} />
            )}

            {/* التاكيد */}
            {step === 6 && (
                <ConfirmAd formik={formik} />
            )}

            <div className="buttons">
                <button className="btn prev" onClick={prevStep}>السابق</button>
                <button
                    className="btn next"
                    onClick={nextStep}
                // disabled={!formik.values.category} // ممنوع تكمل لو لسه ما اخترتش
                >
                    <span>التالي</span>
                    <img src="./advertisements/ArrowLeft.svg" alt="ArrowLeft" className='arrowNext' />
                </button>
            </div>
        </div>
    )
}

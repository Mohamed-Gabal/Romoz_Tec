import React, { useState } from 'react'
import AddHeader from '../../Components/AdvertisementsComponents/AddHeader/AddHeader';
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

                vehicle: {
                    brand: "",
                    model: "",
                },

                realestate: {
                    realestateType: "",
                    streetType: "",
                    realestateInterface: "",
                },

                electronics: {
                    deviceType: "",
                    moreInfo: "",
                }
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
            const cleanedValues = {
                ...values,
                information: {
                    adTitle: values.information.adTitle,
                    adDescription: values.information.adDescription,
                    adPrice: values.information.adPrice,
                    isNegotiable: values.information.isNegotiable,
                    ...(values.category === "السيارات" ? { vehicle: values.information.vehicle } : {}),
                    ...(values.category === "العقارات" ? { realestate: values.information.realestate } : {}),
                    ...(values.category === "الإلكترونيات" ? { electronics: values.information.electronics } : {}),
                },
            };

            console.log("البيانات النهائية:", cleanedValues);
            alert("تم إرسال الإعلان بنجاح");
        },
        validateOnChange: true,
        validateOnBlur: true,
    });

    const nextStep = async () => {
        try {
            let schema = validationSchemas[step];
            if (typeof schema === "function") {
                schema = schema(formik.values.category);
            }
            await schema.validate(formik.values, { abortEarly: false });

            if (step < 6) setStep(step + 1);
        } catch (err) {
            if (err.inner) {
                err.inner.forEach((e) => {
                    formik.setFieldError(e.path, e.message);
                    formik.setFieldTouched(e.path, true, false);
                });
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
                <Information formik={formik} prevStep={prevStep} />
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
                <button className="btn prev" style={{ opacity: step === 1 ? 0 : 1 }} onClick={prevStep}>
                    <img src="./advertisements/ArrowRight.svg" alt="ArrowRight" className='arrowPrev' />
                    <span>السابق</span>
                </button>
                <button
                    className="btn next"
                    onClick={nextStep}
                    style={{ opacity: step < 6 ? 1 : 0 }}
                >
                    <span>التالي</span>
                    <img src="./advertisements/ArrowLeft.svg" alt="ArrowLeft" className='arrowNext' />
                </button>
            </div>
        </div>
    )
}

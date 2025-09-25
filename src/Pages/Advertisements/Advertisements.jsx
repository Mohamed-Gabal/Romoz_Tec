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
import axios from "axios";

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
                },

                jobs: {
                    jobType: "",
                },

                furniture: {
                    furnitureType: "",
                },

                services: {
                    servicesType: "",
                },

                fashion: {
                    fashionType: "",
                    moreInfo: "",
                },

                food: {
                    foodType: "",
                },

                pets: {
                    moreInfo: "",
                },

                anecdotes: {
                    moreInfo: "",
                },

                gardens: {
                    moreInfo: "",
                },

                trips: {
                    moreInfo: "",
                },
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
        onSubmit: async (values) => {
            const cleanedValues = {
                ...values,
                information: {
                    adTitle: values.information.adTitle,
                    adDescription: values.information.adDescription,
                    adPrice: values.information.adPrice,
                    isNegotiable: values.information.isNegotiable,
                    ...(values.category === "vehicles" ? { vehicle: values.information.vehicle } : {}),
                    ...(values.category === "realestate" ? { realestate: values.information.realestate } : {}),
                    ...(values.category === "electronics" ? { electronics: values.information.electronics } : {}),
                    ...(values.category === "jobs" ? { jobs: values.information.jobs } : {}),
                    ...(values.category === "furniture" ? { furniture: values.information.furniture } : {}),
                    ...(values.category === "services" ? { services: values.information.services } : {}),
                    ...(values.category === "fashion" ? { fashion: values.information.fashion } : {}),
                    ...(values.category === "food" ? { food: values.information.food } : {}),
                    ...(values.category === "anecdotes" ? { anecdotes: values.information.anecdotes } : {}),
                    ...(values.category === "gardens" ? { gardens: values.information.gardens } : {}),
                    ...(values.category === "trips" ? { trips: values.information.trips } : {}),
                    ...(values.category === "pets" ? { pets: values.information.pets } : {}),
                },
            };

            try {
                const formData = new FormData();
                formData.append("category", formik.values.category);
                formData.append("adTitle", formik.values.information.adTitle);
                formData.append("adDescription", formik.values.information.adDescription);
                formData.append("adPrice", formik.values.information.adPrice);
                formData.append("isNegotiable", formik.values.information.isNegotiable ? "true" : "false");

                // لو في images
                formik.values.images.forEach((img, index) => {
                    formData.append(`images[${index}]`, img);
                });
                if (formik.values.category === "vehicles") {
                    formData.append("vehicleBrand", formik.values.information.vehicle.brand);
                    formData.append("vehicleModel", formik.values.information.vehicle.model);
                }

                // بيانات الموقع
                formData.append("city", formik.values.location.city);
                formData.append("area", formik.values.location.area);
                formData.append("detailedAddress", formik.values.location.detailedAddress);

                // بيانات البائع
                formData.append("sellerName", formik.values.seller.name);
                formData.append("sellerPhone", formik.values.seller.phone);
                formData.append("webMessage", formik.values.seller.webMessage ? "true" : "false");
                const response = await axios.post(
                    "https://api.mashy.sand.alrmoz.com/api/ads",
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );
                console.log(response.data);

            } catch (error) {

            }

            // console.log("البيانات النهائية:", cleanedValues);
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

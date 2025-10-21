import React, { useState } from 'react';
import "./Location.css";

export const saudiRegions = [
    {
        id: 1,
        region: "الرياض",
        cities: ["الرياض", "الخرج", "الدرعية", "الدوادمي", "المجمعة", "القويعية", "وادي الدواسر", "الزلفي", "شقراء", "الأفلاج", "الغاط", "عفيف", "حوطة بني تميم", "الحريق", "السليل", "ضرماء", "المزاحمية", "ثادق", "رماح", "حريملاء", "مرات", "الدلم"]
    },
    {
        id: 2,
        region: "مكة المكرمة",
        cities: ["مكة المكرمة", "جدة", "الطائف", "القنفذة", "رابغ", "الليث", "الجموم", "خليص", "الكامل", "الخرمة", "رنية", "تربة", "المويه", "أضم", "ميسان", "بحرة"]
    },
    {
        id: 3,
        region: "المدينة المنورة",
        cities: ["المدينة المنورة", "ينبع", "العلا", "خيبر", "بدر", "الحناكية", "المهد", "العيص", "وادي الفرع", "الرايس"]
    },
    {
        id: 4,
        region: "القصيم",
        cities: ["بريدة", "عنيزة", "الرس", "المذنب", "البدائع", "البكيرية", "الأسياح", "رياض الخبراء", "عيون الجواء", "الشماسية"]
    },
    {
        id: 5,
        region: "المنطقة الشرقية",
        cities: ["الدمام", "الخبر", "الأحساء", "القطيف", "الجبيل", "رأس تنورة", "الخفجي", "النعيرية", "بقيق", "حفر الباطن"]
    },
    {
        id: 6,
        region: "عسير",
        cities: ["أبها", "خميس مشيط", "محايل عسير", "النماص", "تنومة", "رجال ألمع", "بيشة", "تثليث", "ظهران الجنوب", "سراة عبيدة"]
    },
    {
        id: 7,
        region: "تبوك",
        cities: ["تبوك", "الوجه", "أملج", "ضباء", "حقل", "تيماء", "البدع", "شرما", "المويلح", "المغاربة"]
    },
    {
        id: 8,
        region: "حائل",
        cities: ["حائل", "بقعاء", "الغزالة", "الشنان", "الحائط", "الشملي", "موقق", "السليمي", "سميراء", "تربه"]
    },
    {
        id: 9,
        region: "الحدود الشمالية",
        cities: ["عرعر", "رفحاء", "طريف", "العويقيلة", "شعبة نصاب", "الهباس", "جديدة عرعر", "الدويد", "أم خنصر", "الحيانية"]
    },
    {
        id: 10,
        region: "جازان",
        cities: ["جازان", "صبيا", "أبو عريش", "صامطة", "بيش", "الدرب", "فرسان", "العارضة", "الريث", "فيفاء"]
    },
    {
        id: 11,
        region: "نجران",
        cities: ["نجران", "شرورة", "حبونا", "بدر الجنوب", "يدمة", "ثار", "الخرخير", "خباش", "المشعلية", "رجلا"]
    },
    {
        id: 12,
        region: "الباحة",
        cities: ["الباحة", "بلجرشي", "المندق", "المخواة", "قلوة", "العقيق", "القرى", "بني حسن", "غامد الزناد", "الحجرة"]
    },
    {
        id: 13,
        region: "الجوف",
        cities: ["سكاكا", "القريات", "دومة الجندل", "طبرجل", "الفياض", "ميقوع", "الرديفة", "عين الحواس", "الطوير", "الشويحطية"]
    }
];

export default function Location({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;

    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = (option) => {
        setFieldValue("location.area", option);
        setIsOpen(false);
    };

    let filteredRegions = saudiRegions.filter( region => 
        region.region.includes(values.location.area)
    );

    let filteredCitiesOfRegions = saudiRegions.find( (region) => region.region === values.location.area )
    console.log(filteredCitiesOfRegions.cities);

    return (
        <div className="location_container">
            <div className="location_header">
                <h3>الموقع</h3>
                <p>حدد موقع الإعلان</p>
            </div>

            <div className="input_container">
                <label htmlFor="detailedAddress">العنوان بالتفصيل*
                    {errors.location?.detailedAddress && touched.location?.detailedAddress && (
                        <div className="info_error">{errors.location?.detailedAddress}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="location.detailedAddress"
                    value={values.location.detailedAddress}
                    onChange={(e) => setFieldValue("location.detailedAddress", e.target.value)}
                    onBlur={handleBlur}
                    id="detailedAddress"
                    className='detailedAddress_input input'
                    placeholder='أدخل عنوان واضح'
                />
            </div>

            <div className="input_container">
                <label htmlFor="city">المدينة*
                    {errors.location?.city && touched.location?.city && (
                        <div className="info_error">{errors.location?.city}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="location.city"
                    value={values.location.city}
                    onChange={(e) => setFieldValue("location.city", e.target.value)}
                    onBlur={handleBlur}
                    id="city"
                    className='city_input input'
                    placeholder='اختر االمدينة'
                />
            </div>

            <div className="input_container">
                <label htmlFor="area">المنطقة*
                    {errors.location?.area && touched.location?.area && (
                        <div className="info_error">{errors.location?.area}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="location.area"
                    value={values.location.area}
                    onChange={(e) => {setFieldValue("location.area", e.target.value); setIsOpen(true);}}
                    onClick={() => setIsOpen(!isOpen)}
                    onBlur={handleBlur}
                    id="area"
                    className='area_input input'
                    placeholder='اختر منطقتك'
                />

                { isOpen && filteredRegions.length > 0 && (
                    <ul className='region_option'>
                        {filteredRegions.map((region) => (
                            <li key={region.id} onClick={()=>handleSelect(region.region)}>{region.region}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

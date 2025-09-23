import React from 'react'
import "./Category.css";

const categories = [
    { id: 1, key: "vehicles", name: "السيارات", icon: "./advertisements/car.svg" },
    { id: 2, key: "realestate", name: "العقارات", icon: "./advertisements/buildings.svg" },
    { id: 3, key: "electronics", name: "الإلكترونيات", icon: "./advertisements/electronics.svg" },
    { id: 4, key: "jobs", name: "الوظائف", icon: "./advertisements/jobs.svg" },
    { id: 5, key: "furniture", name: "الأثاث", icon: "./advertisements/furniture.svg" },
    { id: 6, key: "services", name: "الخدمات", icon: "./advertisements/services.svg" },
    { id: 7, key: "fashion", name: "الأزياء", icon: "./advertisements/fashion.svg" },
    { id: 8, key: "food", name: "الأطعمة", icon: "./advertisements/food.svg" },
    { id: 9, key: "anecdotes", name: "النوادر", icon: "./advertisements/anecdotes.svg" },
    { id: 10, key: "gardens", name: "الحدائق", icon: "./advertisements/gardens.svg" },
    { id: 11, key: "trips", name: "الرحلات", icon: "./advertisements/trips.svg" },
    { id: 12, key: "pets", name: "الحيوانات", icon: "./advertisements/animals.svg" },
];

export default function Category({ formik  }) {
    const { values, setFieldValue, errors, touched } = formik;
    return (
        <div className='category_main'>
            <div className="categories-container">
                <h2 className="title">اختر فئة الإعلان</h2>
                <p className="subtitle">حدد الفئة المناسبة لإعلانك</p>

                <div className="grid-container">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            onClick={() => {
                                setFieldValue("category", cat.name);
                                formik.setFieldError("category", "");
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.name === "Enter" && setFieldValue("category", cat.name)}
                            className={`category-card ${values.category === cat.name ? "active_category" : ""}`}
                        >
                            <div className="icon"><img src={cat.icon} alt={cat.name} /></div>
                            <p>{cat.name}</p>
                        </div>
                    ))}
                </div>

                {/* رسالة خطأ لو المستخدم ما اختارش حاجة */}
                {errors.category && (
                    <div className="error">{errors.category}</div>
                )}
            </div>
        </div>
    )
}


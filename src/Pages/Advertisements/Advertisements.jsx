import React, { useState } from 'react'
import AddHeader from '../../Components/AddComponents/AddHeader/AddHeader';
import Categories from './Category/Category';
import './style.css'
import Information from './Information/Information';

export default function Advertisements() {
    // Step management: 1=category, 2=details, 3=review
    const [step, setStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("");

    const nextStep = () => {
        if (step < 6) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const [formData, setFormData] = useState({
        category: "",
        information: {
            adTitle: "",
            adDescription: "",
            adPrice: "",
        },
        images: [],
        location: {
            detailedAddress: "",
            area: "",
            city: "",
        },
        seller: {
            name: "",
            phone: ""
        }
    });
    return (
        <div className='Advertisements'>
            {/* header */}
            <AddHeader currentStep={step} />

            {/* الخطوة الأولى */}
            {step === 1 && (
                <Categories
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            )}

            {/* مثال: الخطوة الثانية */}
            {step === 2 && (
                <Information/>
            )}

            <div className="buttons">
                <button className="btn prev" onClick={prevStep}>السابق</button>
                <button
                    className="btn next"
                    onClick={nextStep}
                    disabled={!selectedCategory} // ممنوع تكمل لو لسه ما اخترتش
                >
                    <span>التالي</span>
                    <img src="./advertisements/ArrowLeft.svg" alt="ArrowLeft" className='arrowNext' />
                </button>
            </div>
        </div>
    )
}

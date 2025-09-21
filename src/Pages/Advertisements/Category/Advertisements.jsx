import React, { useState } from 'react'
import Category from './Category';
import AddHeader from '../../../Components/AddComponents/AddHeader/AddHeader';

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
    return (
        <div>
            {/* header */}
            <AddHeader currentStep={step} />

            {/* الخطوة الأولى */}
            {step === 1 && (
                <Category
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                    onNext={nextStep}
                    onPrev={prevStep}
                />
            )}

            {/* مثال: الخطوة الثانية */}
            {step === 2 && (
                <div>
                    <h2>أدخل المعلومات</h2>
                    <button onClick={prevStep}>السابق</button>
                    <button onClick={nextStep}>التالي</button>
                </div>
            )}
        </div>
    )
}

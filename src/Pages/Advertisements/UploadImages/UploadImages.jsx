import React, { useState } from 'react';
import "./UploadImages.css";

export default function UploadImages() {
    const [images, setImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prev) => [...prev, ...newImages].slice(0, 10)); // حد أقصى 10 صور
    };

    return (
        <div className="upload_container">
            <div className="upload_header">
                <h3>إضافة الصور</h3>
                <p>أضف صورًا واضحة لزيادة فرص البيع (حتى 10 صور)</p>
            </div>

            <label className="upload-box">
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    onChange={handleImageUpload}
                    hidden
                />
                <div className="upload-content">
                    <div className="upload-icon"><img src="./advertisements/Camera.svg" alt="Camera" /></div>
                    <p>إضافة الصور</p>
                    <span>PNG, JPG, JPEG حتى 5MB لكل صورة</span>
                </div>
            </label>

            <div className="preview">
                {images.map((src, index) => (
                    <div key={index} className="preview-image">
                        <img src={src} alt={`preview-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

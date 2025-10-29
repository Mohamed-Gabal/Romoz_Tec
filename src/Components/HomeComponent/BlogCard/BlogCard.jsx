import React, { useState, useEffect } from "react";

import "./blogCard.css";
import AdCard from "../../AdCard/AdCard";
import SkeletonCard from "../../SkeletonCard/SkeletonCard";

export default function BlogCard() {
  const [adsCard, setAdsCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchRandomEalans = async () => {
      try {
        setIsLoading(true);
import { Link } from "react-router-dom";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import "./blogCard.css";
import AdCard from "../../AdCard/AdCard";

export default function BlogCard() {
  const [adsCard, setAdsCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(
          "/api/ealans/random"
        );

        const data = await res.json();

        if (data?.success) {
          setAdsCard(data?.data?.data);
          setIsLoading(false);
          setErrorMessage("");
        } else {
          setErrorMessage("لم يتم العثور على إعلانات حالياً.");
        }
      } catch {
        setErrorMessage("حدث خطأ أثناء تحميل البيانات، حاول لاحقًا.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomEalans();
  }, []);

  return (
    <section className="car-card">
      {isLoading && <div className="isLoading">
        {Array.from({ length: 4 }, (_, i) => (<SkeletonCard key={i} />))}
      </div>}
      {errorMessage && (<p>{errorMessage}</p>)}
      {!isLoading && !errorMessage && (
        <div className="car_card_container">
          <h2 className="section-title">اكتشف الجديد أولًا</h2>
          <p className="section-subtitle">
            تصفح أحدث إعلانات السيارات المضافة الآن، واعثر على ما يناسبك بسرعة
            وسهولة
          </p>

          <div className="car-card-grid">
            {adsCard.length > 0 ? (
              adsCard.map((ad, index) => (
                <AdCard
                  key={index}
                  category={ad?.category}
                  adID={ad?.ad?.id_ads}
                  img={ad?.ad?.images[0]}
                  title={ad?.ad?.information?.title}
                  sellerName={ad?.ad?.seller?.name}
                  userID={ad?.ad?.user?.id_user}
                  userImg={ad?.ad?.user?.profile_image}
                  area={ad?.ad?.user?.area}
                  created_at={ad?.ad?.created_at}
                  price={ad?.ad?.information?.price}
                />
              ))
            ) : (
              <p className="no-ads">لا توجد إعلانات حالياً</p>
            )}
          </div>
        </div>
      )}
        if (!res.ok) {
          // بدلاً من throw new Error
          setError("حدث خطأ في الاتصال، حاول مرة أخرى.");
          setLoading(false);
          return; // نوقف هنا بدون رمي خطأ
        }

        const data = await res.json();

        if (data?.success) {
          // ناخد أحدث 4 إعلانات فقط
          setAdsCard(data?.data?.data);
        } else {
          setError("لم يتم العثور على إعلانات سيارات حالياً.");
        }
      } catch {
        setError("حدث خطأ أثناء تحميل البيانات، حاول لاحقًا.");
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>جارِ تحميل الإعلانات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  // تحويل التاريخ الي صيغه معينه
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    if (seconds < 60) return "مند لحظات";
    if (seconds < intervals.minute) return `منذ ${seconds} ثانية`;
    if (seconds < intervals.hour)
      return `منذ ${Math.floor(seconds / intervals.minute)} دقيقة`;
    if (seconds < intervals.day)
      return `منذ ${Math.floor(seconds / intervals.hour)} ساعة`;
    if (seconds < intervals.week)
      return `منذ ${Math.floor(seconds / intervals.day)} يوم`;
    if (seconds < intervals.month)
      return `منذ ${Math.floor(seconds / intervals.week)} أسبوع`;
    if (seconds < intervals.year)
      return `منذ ${Math.floor(seconds / intervals.month)} شهر`;

    return `منذ ${Math.floor(seconds / intervals.year)} سنة`;
  };
  return (
    <section className="car-card">
      <div className="car_card_container">
        <h2 className="section-title">اكتشف الجديد أولًا</h2>
        <p className="section-subtitle">
          تصفح أحدث إعلانات السيارات المضافة الآن، واعثر على ما يناسبك بسرعة
          وسهولة
        </p>

        <div className="car-card-grid">
          {adsCard.length > 0 ? (
            adsCard.map((ad, index) => (
              <AdCard
              category={ad?.category}
              adID={ad?.ad?.id_ads}
              img={ad?.ad?.images[0]}
              title={ad?.ad?.information?.title}
              sellerName={ad?.ad?.seller?.name}
              userID={ad?.ad?.user?.id_user}
              userImg={ad?.ad?.user?.profile_image}
              area={ad?.ad?.user?.area}
              created_at={ad?.ad?.created_at}
              price={ad?.ad?.information?.price}
            />
            ))
          ) : (
            <p className="no-ads">لا توجد إعلانات حالياً</p>
          )}
        </div>
      </div>
    </section>
  );
};
import React from "react";
import "./realEstate.css";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const RealEstate = () => {
  const realButtons = [
    "جميع الانواع",
    "فلل للبيع",
    "عمائر",
    "اراضي",
    "استراحات",
    "مزارع",
    "محلات تجاريه",
  ];
  const realFilters = [
    { label: "الموديل", options: ["2020", "2021", "2022", "2023"] },
    { label: "الشكل", options: ["سيدان", "SUV", "هاتشباك"] },
    { label: "الحالة", options: ["جديد", "مستعمل"] },
    { label: "الموقع", options: ["القاهرة", "الجيزة", "الإسكندرية"] },
    {
      label: "السعر",
      options: ["أقل من 200,000", "200,000 - 400,000", "أعلى من 400,000"],
    },
  ];
  const realData = [
    {
      image: "/images/filter2.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/filter2.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/filter2.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
    {
      image: "/images/filter2.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/filter2.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/filter2.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
  ];
  return (
    <CategoryLayout
      title="العقارات والشقق"
      description="تصفح كل انواع العقارات والشقق"
      brandButtons={realButtons}
      filters={realFilters}
      items={realData}
    />
  );
};

export default RealEstate;

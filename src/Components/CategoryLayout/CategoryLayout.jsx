// src/Components/CategoryLayout/CategoryLayout.jsx
import React, { useState } from "react";
import "./CategoryLayout.css";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const CategoryLayout = ({ title, description, brandButtons = [], filters = [], items = [] }) => {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (index) => {
    setOpenFilter(openFilter === index ? null : index);
  };

  return (
    <div className="category-layout">
      {/* العنوان والوصف */}
      <div className="category-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {/* البحث */}
      <div className="category-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder={`ابحث في ${title}...`} />
      </div>
      {/* أزرار الماركات */}
      {brandButtons.length > 0 && (
        <div className="brand-buttons">
          {brandButtons.map((brand, index) => (
            <button key={index} className="brand-btn">
              {brand}
            </button>
          ))}
        </div>
      )}
      {/* باقي الفلاتر */}
      <div className="category-filters">
        {filters.map((filter, index) => (
          <div key={index} className="filter-group">
            <button className="filter-btn" onClick={() => toggleFilter(index)}>
              {filter.label}
            </button>
            {openFilter === index && (
              <div className="filter-options">
                {filter.options.map((option, idx) => (
                  <button key={idx} className="filter-option">
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* الكروت */}
      <div className="categorys-items">
        {items.map((item, index) => (
          <div key={index} className="categorys-card">
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-user">
              <img src={item.userImage} alt={item.userName} />
              <span>{item.userName}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="card-meta">
              <span>
                <CiLocationOn /> {item.location}
              </span>
              <span>
                <CiStopwatch /> {item.time}
              </span>
            </div>
            <button className="details-btn">عرض التفاصيل</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryLayout;

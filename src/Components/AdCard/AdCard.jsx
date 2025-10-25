import React from 'react';
import "./adCardStyle.css"
import { Link, useNavigate } from 'react-router-dom';
import { timeSince } from '../../Pages/SpecificCategory/SpecificCategory';

export default function AdCard({ category, adID, img, title, sellerName, userID, userImg, area, created_at }) {
    const navigate = useNavigate();
    return (
        <div key={adID} className="ad_card" onClick={() => navigate(`/${category}/${adID}`)}>
            <div className="card_image">
                <img src={`https://api.mashy.sand.alrmoz.com/storage/${img}`} alt={title} />
            </div>

            <div className="card_user" onClick={(e) => { e.stopPropagation(); navigate(`/user/${sellerName}/${userID}`) }}>
                {userImg ? (
                    <img src={userImg} alt={sellerName} />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx={12} cy={10} r={4} /><circle cx={12} cy={12} r={10} /></svg>
                )}
                <span>{sellerName.split(" ").slice(0, 2).join(" ")}</span>
            </div>

            <div className="card_body">
                <h3>{title.substring(0, 18)}...</h3>
                <div className="mapPin_timer">
                    <div className="mapPin">
                        <div className="mapPin_icon">
                            <img src="/Icons/MapPin.svg" alt="MapPin" />
                        </div>
                        <span>{area || "غير محدد"}</span>
                    </div>
                    <div className="timer">
                        <div className="timer_icon">
                            <img src="/Icons/Timer.svg" alt="Timer" />
                        </div>
                        <span>{timeSince(created_at)}</span>
                    </div>
                </div>
            </div>
            <Link to={`/${category}/${adID}`} className="details_link">
                عرض التفاصيل
            </Link>
        </div>
    )
};
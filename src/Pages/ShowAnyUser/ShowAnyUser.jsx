import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SkeletonCard from '../../Components/SkeletonCard/SkeletonCard';
import NotFound from '../../Components/NotFound/NotFound';
import AdCard from '../../Components/AdCard/AdCard';
import "./showAnyUserStyle.css"

export default function ShowAnyUser() {
    const { userID } = useParams();
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchUserData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/showAnyUserData/${userID}`, { method: "GET", });

                const data = await response.json();
                if (data.success) {
                    setUserData(data.data);
                    setIsLoading(false)
                    setErrorMessage("");
                } else {
                    setErrorMessage("فشل في تحميل بيانات المستخدم.");
                }
            } catch {
                setErrorMessage("حدث خطأ أثناء تحميل البيانات.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [userID]);

    return (
        <section className="showAnyUserData">
            {isLoading && (
                <div className="loading_data">
                    <div className="isLoading">
                        {Array.from({ length: 4 }, (_, i) => (<SkeletonCard key={i} />))}
                    </div>
                </div>
            )}

            {errorMessage && <NotFound />}

            {!isLoading && !errorMessage && (
                <div className="showAnyUserData_container">
                    <div className="user_data">
                        <div className="user_images">
                            <div className="cover_user_image">
                                <img src={userData?.user?.cover_image} alt="صورة الكوفر" loading="lazy" />
                            </div>

                            <div className="profile_user_image">
                                <div className="user_img_container">
                                    <img src={userData?.user?.profile_image} alt="img" loading="lazy" />
                                </div>
                                <div className="status_dot" style={{ backgroundColor: userData?.user?.is_online ? "var(--main-color)" : "var(--parg-color)" }} />
                            </div>
                        </div>

                        <div className="user_info">
                            <h3 className="user_name">{userData?.user?.name?.split(" ").slice(0, 2).join(" ")}</h3>
                            {!userData?.user?.is_online && (
                                <h6 className="user_status">
                                    <span>آخر ظهور  </span>
                                    <span>{userData?.user?.last_seen_at}</span>
                                </h6>
                            )}
                        </div>

                        {errorMessage && <p className="error_message">{errorMessage}</p>}
                    </div>

                    <div className="categories_items">

                        {userData?.data?.map((cat, index) => (
                            <AdCard
                                key={index}

                        {userData?.data?.map((cat) => (
                            <AdCard
                                category={cat?.category}
                                adID={cat?.ad?.id_ads}
                                img={cat?.ad?.images[0]}
                                title={cat?.ad?.information?.title}
                                sellerName={cat?.ad?.seller?.name}
                                userID={cat?.ad?.user?.id_user}
                                userImg={cat?.ad?.user?.profile_image}
                                area={cat?.ad?.user?.area}
                                created_at={cat?.ad?.created_at}
                                price={cat?.ad?.information?.price}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
};
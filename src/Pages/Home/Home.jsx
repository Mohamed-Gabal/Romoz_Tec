import React from "react";
import "./Home.css";
import SearchBar from "../../Components/HomeComponent/SearchBar/SearchBar";
import Slider from '../../Components/HomeComponent/Slider/Slider';
import AddList from '../../Components/HomeComponent/AddList/AddList';
import BlogCard from "../../Components/HomeComponent/BlogCard/BlogCard";
import SellSeaction from "../../Components/HomeComponent/SellSeaction/SellSeaction";
import CategoriesSection from "../../Components/HomeComponent/CategoriesSection/CategoriesSection";

const Home = () => {
  return (
      <div className="home-container">
        <SearchBar />
        <Slider />
        <AddList />
        <CategoriesSection/>
        <BlogCard />
        <SellSeaction />
      </div>
  );
};
export default Home;

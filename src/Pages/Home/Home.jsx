import React from "react";
import "./Home.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Slider from '../../Components/Slider/Slider';
import AddList from '../../Components/AddList/AddList';
import BlogCard from "../../Components/BlogCard/BlogCard";
import SellSeaction from "../../Components/SellSeaction/SellSeaction";

const Home = () => {
  return (
      <div className="home-container">
        <SearchBar />
        <Slider />
        <AddList />
        <BlogCard />
        <SellSeaction />
      </div>
  );
};
export default Home;

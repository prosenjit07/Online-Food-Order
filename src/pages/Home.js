import React from "react";
//babol compiler
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner1.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return ( 
    <Layout>
      
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>My Restaurant</h1>
          <p>Best Food In Bangladesh</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

//to use from other js file
export default Home;

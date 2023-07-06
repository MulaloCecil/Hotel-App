import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import LandingPage from '../components/LandingPage';
import '../LandingPage.css';

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Hayani Hotel" subtitle="Book your stay today">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
         
        </Banner>
       
      </Hero>
      <LandingPage/>
      <Services />
    </React.Fragment>
  );
}

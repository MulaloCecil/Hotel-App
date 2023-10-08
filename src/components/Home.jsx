import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";
import Services from "./Services";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Hayani Hotel" subtitle="Please Login to Book your stay today" >
          <Link to="/rooms" className="flex items-center justify-center w-full bg-teal-500 text-white p-3 rounded-md font-medium hover:bg-teal-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-teal-300">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <Services />
    </React.Fragment>
  );
}

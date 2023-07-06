import React, { Component } from "react";
import {
  FaBeer,
  FaBreadSlice,
  FaGamepad,
  FaLightbulb,
  FaParking,
  FaSwimmer,
  FaWifi,
  FaShower
} from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSwimmer />,
        title: "Swimming Pool"
      },
      {
        icon: <FaWifi />,
        title: "Free Wi-Fi"
      },

      {
        icon: <FaBreadSlice />,
        title: "Breakfast"
      },

      {
        icon: <FaShower />,
        title: "Hot Water"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer"
      },

      {
        icon: <FaGamepad />,
        title: "Game Centre"
      },

      {
        icon: <FaLightbulb />,
        title: "No Loadshedding"
      },

      {
        icon: <FaParking />,
        title: "Free Parking"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Our Facilities" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

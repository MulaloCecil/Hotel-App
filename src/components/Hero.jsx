import React from "react";

// Import the background image (update the path or URL accordingly)
import backgroundImage from "../assets/room-9.jpeg";

export default function Hero({ children, hero }) {
  // If the 'hero' prop is provided, use it as additional classes
  const classes = hero ? `hero ${hero}` : "hero";

  return (
    <header className={classes} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </header>
  );
}

Hero.defaultProps = {
  hero: null // Set 'hero' to null by default
};

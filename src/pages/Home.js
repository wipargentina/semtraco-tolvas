import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Typologies from "../components/Typologies";
import Cta from "../components/Cta";
import Support from "../components/Support";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Typologies />
        <Cta />
        <Support />
      </div>
    );
  }
}

export default Home;

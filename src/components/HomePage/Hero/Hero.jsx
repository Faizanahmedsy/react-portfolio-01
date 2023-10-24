import React from "react";
import "./Hero.css";
import { Row, Typography } from "antd";

const Hero = () => {
  return (
    <>
      <section className="first-section">
        <div>
          <div className="waviy">
            <span style={{ "--i": 1 }}> F </span>
            <span style={{ "--i": 2 }}> a </span>
            <span style={{ "--i": 3 }}> i </span>
            <span style={{ "--i": 4 }}> z </span>
            <span style={{ "--i": 5 }}> a </span>
            <span style={{ "--i": 6 }}> n </span>
            <span style={{ "--i": 7 }}> a </span>
            <span style={{ "--i": 8 }}> h </span>
            <span style={{ "--i": 9 }}> m </span>
            <span style={{ "--i": 10 }}> e </span>
            <span style={{ "--i": 11 }}> d </span>
          </div>

          <div className="_container">
            <p
              style={{
                marginTop: "0",
              }}
            >
              I'm
            </p>

            <section className="_animation">
              <div className="_first">
                <div>Frontend Dev</div>
              </div>
              <div className="_second">
                <div>Cs Sophomore</div>
              </div>
              <div className="_third">
                <div>Tech enthusiast</div>
              </div>
            </section>
          </div>
        </div>

        <p
          style={{
            position: "absolute",
            bottom: "90px",
            fontFamily: " 'lexend', sans-serif ",
            fontSize: "1rem",
          }}
        >
          React is my 🍞 and 🧈
        </p>
      </section>
    </>
  );
};

export default Hero;

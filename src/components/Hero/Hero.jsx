import { Typography } from "antd";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section
        style={{
          display: "grid",
          placeItems: "center",
          height: "92vh",
        }}
      >
        <div>
          {/* <Typography.Title id='title'>Faizanahmed</Typography.Title> */}

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

            {/* <span style="--i:2">o</span>
            <span style="--i:3">a</span>
            <span style="--i:4">d</span>
            <span style="--i:5">i</span>
            <span style="--i:6">n</span>
            <span style="--i:7">g</span>
            <span style="--i:8">.</span> */}
          </div>
          {/* <Typography.Text classNameNameName="f_lexend">
            Front End Developer
          </Typography.Text> */}

          <main className="_container">
            <p> I'm</p>
            <section className="_animation">
              <div className="_first">
                <div>Frontend Developer</div>
              </div>
              <div className="_second">
                <div>Cs Sophmore</div>
              </div>
              <div className="_third">
                <div>Tech enthusiast</div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
};

export default Hero;

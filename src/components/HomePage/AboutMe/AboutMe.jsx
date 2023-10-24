import { Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section id="about-sec">
        <Row>
          <Col md={8}></Col>
          <Col md={8}>
            {/* <Typography.Title level={4} className="text-center"> */}{" "}
            {/* <h1 className="foo">
              <span>There</span>
              <span>are</span>
              <span>no</span>
              <span>limits</span>
              <span>to</span>
              <span>what</span>
              <span>you</span>
              <span>can</span>
              <span>accomplish,</span>
              <span>except</span>
              <span>the</span>
              <span>limits</span>
              <span>you</span>
              <span>place</span>
              <span>on</span>
              <span>your</span>
              <span>own</span>
              <span>thinking.</span>
            </h1> */}
            {/* <!--Brian Tracy--> */}
            {/* </Typography.Title> */}
          </Col>
          <Col md={8}></Col>
        </Row>
        {/* <Divider /> */}

        <Row justify="center" gutter={16}>
          <Col md={4}></Col>

          <Col md={10}>
            <Card title="About Me" style={{ width: 300 }}>
              Hey, I am Faizan, a second-year BTECH IT student, currently
              working as a full-time Co-Op React JS developer.
            </Card>
          </Col>
          <Col md={4}></Col>
          <Col md={6}></Col>
        </Row>

        <Divider />
        <Row gutter={16}>
          <Col md={4}></Col>
          <Col md={6}>
            <Card></Card>
          </Col>
          <Col md={10}>
            <Card></Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </section>
    </>
  );
};

export default AboutMe;

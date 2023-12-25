import { Row, Col, Card } from "antd";
import Container from "../Container/Container";
import "./About.css";
// import TechStackCard from "./TechStackCard.jsx";

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1>About</h1>
          </Col>
          <Col span={12}></Col>
          <Col span={12}>
            <Card title="Education"></Card>
          </Col>
          <Col span={12}>
            <Card title="Experience"></Card>
          </Col>
          <Col span={12}></Col>
          <Col span={12}>
            {/* <TechStackCard /> */}
            <Card title="Tech Stack" className="secondRowCard">
              <Row>
                <Col span={4}>
                  <img
                    src="https://api.iconify.design/logos/react.svg?width=45&height=45"
                    alt="react"
                  />
                </Col>
                <Col span={4}>
                  <img src="https://api.iconify.design/logos/nextjs-icon.svg?width=45&height=45" />
                </Col>
                <Col span={4}>
                  <img
                    src="https://api.iconify.design/logos/ant-design.svg?width=45&height=45"
                    alt=""
                  />
                </Col>
                <Col span={4}>
                  <img
                    src="https://api.iconify.design/logos/ionic-icon.svg?width=45&height=45"
                    alt=""
                  />
                </Col>
                <Col span={4}>
                  <img
                    src="https://api.iconify.design/logos/javascript.svg?width=45&height=45"
                    alt=""
                  />
                </Col>
                <Col span={4}>
                  <img
                    src="https://api.iconify.design/logos/java.svg?width=45&height=45"
                    alt=""
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

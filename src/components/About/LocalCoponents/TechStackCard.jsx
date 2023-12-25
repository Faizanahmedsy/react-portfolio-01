import { Card, Col, Row } from "antd";

const TechStackCard = () => {
  return (
    <div>
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
    </div>
  );
};

export default TechStackCard;

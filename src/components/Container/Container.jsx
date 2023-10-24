import React from "react";
import { Row, Col } from "antd";

const Container = ({ children }) => {
  return (
    <Row justify="center">
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        {children}
      </Col>
    </Row>
  );
};

export default Container;

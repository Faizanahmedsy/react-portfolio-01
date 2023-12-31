import { Col, Row, Tag } from "antd";
import React from "react";
import Container from "../Container/Container";

const MyProjects = () => {
  return (
    <div
      style={{
        height: "90vh",
      }}
    >
      <Row justify="center">
        <Col
          xs={24}
          sm={22}
          md={20}
          lg={18}
          xl={16}
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            My Projects
          </h1>
        </Col>
      </Row>

      <Container>
        <Row gutter={[16, 16]}>
          {/* ... (existing code) */}
          {Array.from({ length: 4 }, (_, i) => (
            <Col span={12} key={i}>
              <Tag
                color={i % 2 === 0 ? "magenta" : "red"}
                style={{
                  width: "100%",
                  height: "100px",
                  padding: "1rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <p
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "pre-line",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam explicabo ipsum, cum quia perspiciatis dolores vero.
                  Possimus explicabo porro at. qui?
                </p>
              </Tag>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyProjects;

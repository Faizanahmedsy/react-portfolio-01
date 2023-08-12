import { Button, Col, Row, Tag } from "antd";

const NavBar = () => {
  return (
    <>
      <Row
        style={{
          // backgroundColor: "black",
          width: "100%",
          height: "8vh",
          // color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col
          md={8}
          style={{
            paddingLeft: "20px",
          }}
        >
          Faizanahmed
        </Col>
        <Col
          md={8}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Tag
            color="purple"
            style={{
              borderRadius: "50px",
              padding: "10px",
              fontSize: "15px",
            }}
          >
            Home
          </Tag>
          <Tag
            color="magenta"
            style={{
              borderRadius: "50px",
              padding: "10px",
              fontSize: "15px",
            }}
          >
            Projects
          </Tag>
          <Tag
            color="geekblue"
            style={{
              borderRadius: "50px",
              padding: "10px",
              fontSize: "15px",
            }}
          >
            Profile
          </Tag>
          <Tag
            color="volcano"
            style={{
              borderRadius: "50px",
              padding: "10px",
              fontSize: "15px",
            }}
          >
            Story
          </Tag>
        </Col>
        <Col
          md={8}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "30px",
          }}
        >
          Contact
        </Col>
      </Row>
    </>
  );
};

export default NavBar;

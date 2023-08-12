import { Button, Col, FloatButton, Row, Tag } from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const nav = useNavigate();
  return (
    <>
      <Row
        style={{
          // backgroundColor: "white",
          backgroundColor: "rgba(255,255,255,0.4)",
          width: "100%",
          height: "8vh",
          // color: "white",
          display: "flex",
          alignItems: "center",
          position: "fixed",
          zIndex: "1",
          overflow: "hidden",
          bottom: "0",  
        }}
      >
        <Col
          md={8}
          style={{
            paddingLeft: "20px",
          }}
          className="f_lexend"
        >
          Made with 💛 by faizan
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
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => nav("/")}
          >
            Home
          </Tag>
          <Tag
            color="magenta"
            style={{
              borderRadius: "50px",
              padding: "10px",
              fontSize: "15px",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => {
              nav("/myprojects");
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
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => nav("/blog")}
          >
            Blogs
          </Tag>

          <Tag
            color="volcano"
            style={{
              borderRadius: "50px",
              padding: "10px",
              fontSize: "15px",
              cursor: "pointer",
              userSelect: "none",
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
          <FloatButton.Group
            trigger="hover"
            icon={<LinkOutlined />}
            style={{
              bottom: "20px",
            }}
          >
            <FloatButton
              icon={<LinkedinOutlined />}
              tooltip={"LinkedIn"}
              href="https://www.linkedin.com/in/faizanahmed-saiyed/"
            />
            <FloatButton
              icon={<GithubOutlined />}
              tooltip={"Github"}
              href="https://github.com/Faizanahmedsy"
            />
            <FloatButton
              icon={<MailOutlined />}
              tooltip={"Email"}
              href="mailto:saiyed.faizanahmed1@gmail.com"
            />
          </FloatButton.Group>
        </Col>
      </Row>
    </>
  );
};

export function SocialsIcon() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <img
        src="https://api.iconify.design/dashicons/admin-links.svg?width=25"
        alt=""
      />
    </div>
  );
}

export function LinkedInIcon() {
  return (
    <img
      src="https://api.iconify.design/tabler/brand-linkedin.svg?width=25"
      alt=""
    />
  );
}

export default NavBar;

import React from "react";
import "./Startteaching.css";
import { Col, Container, Form, Row, Image, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Startteaching() {
  return (
    <Container>
      <Row>
        <Col md={5}></Col>
        <Col md={2}>
          <Link
            to="/todaytopic"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div id="startwatchingTxt">Start Watching</div>
          </Link>
        </Col>
        <Col md={5}></Col>
      </Row>
    </Container>
  );
}

import React from "react";
import { Col, Container, Form, Row, Image, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TeacherHomepage.css";
export default function TeacherHomepage() {
  return (
    <Container>
      <Row>
        <Col md={2}></Col>
        <Col>
          <div id="welcomeTxt1">WELCOME TO TEACHER’S PANEL</div>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Link
            to="/startteaching"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div id="welcomeTxt2">Start Teaching</div>
          </Link>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

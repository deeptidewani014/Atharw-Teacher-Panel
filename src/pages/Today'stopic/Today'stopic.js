import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Todaystopic.css";
import { Link } from "react-router-dom";

export default function Todaytopic() {
  return (
    <Container>
      <Row>
        <Col>
          <div id="bidsStatusDiv" md={3}>
            Write today's topic
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/liveclasses">
              <Button id="tableBtnsBidsModal">start</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

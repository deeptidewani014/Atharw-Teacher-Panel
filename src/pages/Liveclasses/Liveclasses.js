import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import { ImAttachment } from "react-icons/im";
import { MdOutlineMessage } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import "./Liveclasses.css";
export default function LiveClasses() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "3rem" }}>
          <Col xs={12} md={8}>
            <Row>
              <Col id="livecls1">
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/wo2-ldwHqyQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
            <Row>
              <Col id="livecls2">
                <div id="livecls4">
                  <ImAttachment /> Download attachment or Material
                </div>
                <div>
                  <Button id="btn1">
                    <div>Upload</div>
                    <div style={{ marginLeft: "6rem" }}>
                      <FiDownload />
                    </div>
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4} id="livecls3">
            <div style={{ padding: "1.5rem" }}>
              <div>
                <MdOutlineMessage
                  style={{ height: "2em", width: "2em", color: "#1976D2" }}
                />{" "}
                Interaction section
              </div>
              <div id="livecls5">
                <div style={{ padding: "2.5rem", position: "relative" }}>
                  <p>chat section</p>
                  <p>chat section</p>
                  <p>chat section</p>
                  <p>chat section</p>
                  <p>chat section</p>
                  <p>chat section</p>
                  <p>chat section</p>
                  <p>chat section</p>
                  <p>chat section</p>
                </div>
                <div id="livecls6">Send</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

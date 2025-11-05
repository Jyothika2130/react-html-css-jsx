import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Example = () => {
  const images = {
    width: "18rem",
    height: "200px",
  };
  return (
    <>
      <Container>
        <h1 style={{marginTop:'10px',fontFamily:'sans-serif'}}>Popular Real-Life Examples of React Websites</h1>
        <Row className="mt-5 gap-5">
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={images}
                variant="top"
                src="https://images.ctfassets.net/23aumh6u8s0i/5rK62NTJvF2m28zXkvA6cp/476d5befbf876ad8a6583303415f8e27/facebook_login_hero"
              />
              <Card.Body>
                <Card.Title className="text-center">Facebook</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={images}
                variant="top"
                src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?semt=ais_hybrid&w=740&q=80"
              />
              <Card.Body>
                <Card.Title className="text-center">Instagarm</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={images}
                src="https://m.media-amazon.com/images/I/51LGj5--KsL.png"
              />
              <Card.Body>
                <Card.Title className="text-center">NetFlix</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={images}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4n4ZZfsB7E7PV1NSmfLg3Rvcg4OOF5ukpg&s"
              />
              <Card.Body>
            <Card.Title className="text-center">Whatsapp</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={images}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3IU1RCsS4ozW3QOnKstCVJ8vKqhIR3PllQ&s"
              />
              <Card.Body>
            <Card.Title className="text-center">Airbnb</Card.Title>
              </Card.Body>
            </Card>
          </Col>
           <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={images}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-eHyIHkbiQ428WtDUb7s6dFnDK3CQ7YQog&s"
              />
              <Card.Body>
            <Card.Title className="text-center">Spotify Web Player</Card.Title>
              </Card.Body>
            </Card>
          </Col>
           
        </Row>
      </Container>
    </>
  );
};

export default Example;

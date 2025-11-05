import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './about.css'
const About = () => {
  const box = {
    height: "250px",
    width: "250px",
    boxShadow: "1px 1px 1px 1px grey,1px 1px 1px 1px wheat",
    backgroundImage: "linear-gradient(to right,grey,white)",
  };
  return (
    <>
      <Container>
        <h1 style={{ marginTop: "10px" }}>INTRODUCION</h1>
        <p style={{ color: "black", fontSize: "30px", marginTop: "50px" }}>
          React is a JavaScript library developed by Facebook (now Meta) for
          building user interfaces (UI) — especially for single-page
          applications (SPAs) where content updates dynamically without
          reloading the page.{" "}
        </p>
        <h1 style={{ color: "black", marginTop: "50px" }}>KEY FEATURES</h1>
        <Row className="gap-3 mt-5">
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  Component-Based Architecture
                </Card.Title>

                <Card.Text>
                  React apps are built using small, reusable pieces called
                  components. Each component handles a part of the user
                  interface (like buttons, forms, headers, etc.).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  Virtual DOM (Document Object Model)
                </Card.Title>

                <Card.Text>
                  React uses a virtual copy of the DOM to efficiently update
                  only the parts of the web page that change — making the app
                  faster.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  JSX (JavaScript XML)
                </Card.Title>

                <Card.Text>
                  JSX lets you write HTML inside JavaScript.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  One-Way Data Flow
                </Card.Title>

                <Card.Text>
                  Data flows in one direction — from parent to child components
                  — making the code more predictable and easier to debug.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  React Hooks
                </Card.Title>

                <Card.Text>
                  Hooks (like useState, useEffect) allow you to use state and
                  lifecycle features inside functional components.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  Reusable Components
                </Card.Title>

                <Card.Text>
                  You can use the same component in multiple places — saving
                  time and keeping your code clean.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  React Router
                </Card.Title>

                <Card.Text>
                  React Router allows you to create multiple pages in a
                  single-page application. It helps in navigation between pages
                  like Home, About, Contact, etc., without reloading the whole
                  page.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={box}>
              <Card.Body>
                <Card.Title
                  style={{ fontStyle: "oblique", fontWeight: "bold" }}
                >
                  Single Page Application
                </Card.Title>

                <Card.Text>
                  A Single Page Application (SPA) is a web application that
                  loads only one HTML page and dynamically updates its content
                  as the user interacts with the app — without reloading the
                  entire page.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 style={{ color: "black", marginTop: "50px" }}>WHY REACT ???</h1>
<ul style={{listStyleType:'number'}}>
  <li>Easy to learn and use — based on JavaScript.</li>
  <li>Component-based architecture for reusable code.</li>
  <li>High performance using the Virtual DOM.</li>
  <li>Large and active community with many resources.</li>
  <li>Backed and maintained by Meta (Facebook).</li>
  <li>Supports mobile development via React Native.</li>
  <li>Rich ecosystem (Redux, Next.js, UI libraries, etc.).</li>
</ul>

        <h1 style={{ color: "black", marginTop: "50px" }}>HISTORY</h1>
        <ul className="mt-5 ">
          <li>
            <strong>2011:</strong> React was created by{" "}
            <strong>Jordan Walke</strong>, a software engineer at Facebook, to
            make the UI faster and more efficient.
          </li>
          <li>
            <strong>2012:</strong> React was first used in Facebook’s{" "}
            <strong>News Feed</strong> for real-time updates without reloading
            the page.
          </li>
          <li>
            <strong>2013:</strong> Facebook <strong>open-sourced React</strong>{" "}
            at the JSConf US conference, allowing global developers to use and
            contribute.
          </li>
          <li>
            <strong>2015:</strong> Facebook released{" "}
            <strong>React Native</strong> for building mobile applications using
            JavaScript and React concepts.
          </li>
          <li>
            <strong>2016–2017:</strong> Introduction of{" "}
            <strong>React Fiber</strong>, a new core architecture that made
            React faster and smoother.
          </li>
          <li>
            <strong>2019:</strong> Launch of <strong>React Hooks</strong> like
            useState and useEffect — allowing functional components to use state
            and other features.
          </li>
          <li>
            <strong>Today:</strong> React is one of the most popular JavaScript
            libraries, maintained by <strong>Meta (Facebook)</strong> and a
            large open-source community.
          </li>
        </ul>
      </Container>
    </>
  );
};

export default About;

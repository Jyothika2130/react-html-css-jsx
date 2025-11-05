import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import "./TUt.css";
const Tutorial = () => {
  const forP={
   
    fontSize: '20px',
    textAlign: 'justify'

  }
  return (
    <>
      <Container>
        <h1 style={{ fontStyle: 'revert-layer', marginTop: "30px", fontSize:'50px',textAlign:'center'}}>
          React Topics
        </h1>
        <Row>
          <Col>
            <h2>1.Components</h2>
            <p style={forP}>
              Components are the building blocks of a React application. Each
              component represents a part of the UI — like a button, header, or
              form. There are two types: Functional Components – simple
              functions that return UI (using hooks for state). Class Components
              – older style using class and lifecycle methods.
            </p>
          </Col>
          <Col>{""}</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h2>2. Props and State</h2>
            <p style={forP}>Props are like function parameters — used to pass data from parent
            to child components. State represents data that can change inside a
            component. Props are read-only, but state can be updated using
            setState or useState.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>3. Lifecycle Methods</h2>
            <p style={forP}>
              These are class component methods that run during different phases
              of a component’s life. Phases:
            </p>

            <ul>
              <li>Mounting – when the component loads (componentDidMount)</li>
              <li>Updating – when data or props change (componentDidUpdate)</li>
              <li>
                Unmounting – when the component is removed
                (componentWillUnmount)
              </li>
            </ul>

            <p style={forP}>
              In functional components, hooks like useEffect handle lifecycle
              behavior.
            </p>
          </Col>
          <Col>{""}</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h2>4.Hooks</h2>
            <p style={forP}>
             
              Hooks are special functions that let you use React features in
              functional components. Common hooks: useState → to manage state
              useEffect → to perform side effects (like fetching data)
              useContext, useRef, useMemo → for advanced use cases.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>5.Routing</h2>
            <p style={forP}>
              React uses React Router for navigation between pages. It allows
              your app to have multiple pages (Home, About, Contact) without
              reloading the entire site.
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h2> 6. Forms and Events</h2>
            <p style={forP}>  Forms help collect user input (text, checkbox, etc.). React handles
             Forms help collect user input (text, checkbox, etc.). React handles
            user actions through event handlers like onChange, onClick,
            onSubmit.
           The useState hook is often used to handle input data.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tutorial;

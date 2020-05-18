import React, { Suspense } from "react";
import {
  Row,
  Col
} from "reactstrap";
import CardsList from "./CardsList";

const App = (props) => {
  return (<><Row className="mt-4">
    <Col className="text-center">
    <strong>Cards List</strong>
    </Col>
  </Row>
  <CardsList />
  </>)
 };

export default App;

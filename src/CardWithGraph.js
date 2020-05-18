import React, { Suspense, useState } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Row,
  Col,
  UncontrolledCollapse,
} from "reactstrap";
import { useInView } from "react-intersection-observer";

import CardContentLoader from "./CardContentLoader";
// import SampleChart from "./chart";

const SampleChart = React.lazy(() => import("./chart"));

const CardWithGraph = (props) => {
  const { title, Subtitle, id } = props.data;
  const [showGraph, setshowGraph] = useState(false);

  const [ref, inView, entry] = useInView({
    triggerOnce: true,
  });

  return (
    <div key={`card-${id}-div`} ref={ref}>
      {!inView ? (
        <CardContentLoader size="md" className="oui-mb-3" />
      ) : (
        <Card className="mt-3">
          <CardBody>
            <CardTitle>
              {title} &nbsp;
              <Button
                color="primary"
                id={`toggler-${id}`}
                style={{ marginBottom: "1rem" }}
                onClick={() => setshowGraph(true)}
              >
                Toggle
              </Button>
            </CardTitle>
            <UncontrolledCollapse toggler={`toggler-${id}`}>
              <CardSubtitle>{Subtitle}</CardSubtitle>
              <Row>
                <Col sm={8} className="mx-auto">
                  {showGraph && (
                    <Suspense fallback={<div>Loading charts...</div>}>
                      <SampleChart id={id} />
                    </Suspense>
                  )}
                </Col>
              </Row>
              <CardText>Testing performance of chart 1</CardText>
            </UncontrolledCollapse>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default CardWithGraph;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';



function Index() {
  return (
    <>
      <Container fluid className="p-0 m-0 About-title-section ">
        <Container>
          <div className="primaryBlock w-100 min-vh-100 d-flex align-content-center flex-wrap ">
            <h2 className="About-title w-100">
              Hey, jesteśmy
            </h2>
            <h2 className="About-title w-100 ">Craft Media House.
              <div className="svg--hand">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 103">
                  <path id="hand"
                    d="M70.6,47.1a8.67,8.67,0,0,0-3.1-1l.6-1a8.38,8.38,0,0,0,.8-6.2A8.12,8.12,0,0,0,65.1,34a8.85,8.85,0,0,0-3-1l.5-.9a8.38,8.38,0,0,0,.8-6.2A8.12,8.12,0,0,0,59.6,21a8.38,8.38,0,0,0-6.2-.8A8.12,8.12,0,0,0,48.5,24l-.7,1a12.06,12.06,0,0,0-2.4-2.1A8.18,8.18,0,0,0,34.3,26L18.4,54.2c0,.1-.1.2-.4.2s-.3-.2-.3-.3V42.5a8.16,8.16,0,0,0-2.5-5.9,8.24,8.24,0,0,0-5.9-2.4H9.2A8.37,8.37,0,0,0,.9,42.6V73.4A29.79,29.79,0,0,0,56.6,88.3L73.3,58.7C75.8,54.4,74.5,49.3,70.6,47.1Zm-1.5,9L52.3,85.7a24.86,24.86,0,0,1-33.8,9.4A24.58,24.58,0,0,1,6,73.4V42.5a3.42,3.42,0,0,1,3.3-3.4,3.1,3.1,0,0,1,2.4,1,3.49,3.49,0,0,1,1,2.4V54.2a5.44,5.44,0,0,0,4.1,5,5.3,5.3,0,0,0,5.9-2.6L38.6,28.4a3.17,3.17,0,0,1,1.9-1.5,3.32,3.32,0,0,1,2.4.3,3.58,3.58,0,0,1,1.5,1.9,3.39,3.39,0,0,1-.3,2.4l-13,23.2,4.4,2.5L52.7,26.7a3.17,3.17,0,0,1,1.9-1.5,3.32,3.32,0,0,1,2.4.3,3.17,3.17,0,0,1,1.5,1.9,3.32,3.32,0,0,1-.3,2.4L40.9,60.2l4.4,2.5L58.4,39.6a3.17,3.17,0,0,1,1.9-1.5,3.32,3.32,0,0,1,2.4.3,3.17,3.17,0,0,1,1.5,1.9,3.32,3.32,0,0,1-.3,2.4l-4.5,7.9h0L48.9,69l4.4,2.5L63.6,53a3.89,3.89,0,0,1,2.2-1.8,2.87,2.87,0,0,1,2.4.2A3.61,3.61,0,0,1,69.1,56.1Z"
                    transform="translate(-1)"></path>
                </svg>
              </div>
            </h2>
            <p className="About-subtitle">
              Jesteśmy marketplacem pracy ze Wrocławia. Strategia jest projektowanie i rozwój na wszystkich platformach i
              kierunkach.
            </p>
          </div>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col>
            <Row className="my-5 containerInfoBusines mx-0">
              <Col className="p-0">
                <div className="containerInfoBusinesLeft p-4">
                  <div>

                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Index;

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import img1 from "../images/Mishary Rashid Al-Afasy.jpg";
import img2 from "../images/Abu Bakr Al-Shatri.jpg";

function Reciters() {
  let [Reciters, setReciters] = useState([]);
  let Images = [img1, img2];
  const getReciters = () => {
    fetch("https://quranapi.pages.dev/api/reciters.json")
      .then((res) => res.json())
      .then((data) => setReciters(data));
  };
  useEffect(() => {
    getReciters();
  }, []);

  return (
    <Container>
      <h2 className="text-center fw-bold mt-3 fs-1">القــراء</h2>
      <Row className="justify-content-center mt-3 mb-5 ">
        {Object.values(Reciters).map((el, index) => {
          return (
            <Col sm="6" key={index}>
              <Card className="text-center">
                <Card.Img variant="top" src={Images[index]} />
                <Card.Body>
                  <Card.Title>{el}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Reciters;

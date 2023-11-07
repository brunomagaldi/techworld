import Carousel from "react-bootstrap/Carousel";
import cel from "../assets/pexels-tracy-le-blanc-607812.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardimg from "../assets/pexels-designecologist-1970139.jpg";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={cel} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cel} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cel} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent comodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="ro ce">
        <Card style={{ width: "18rem", marginRight: "20px", marginTop: "20px"}}>
          <Card.Img variant="top" src={cardimg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              ipsum fuga nulla alias magnam nihil pariatur dolores ex iure ab
              adipisci mollitia minus ipsam impedit, consequuntur dolorem soluta
              possimus animi!
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginRight: "20px", marginTop: "20px"}}>
          <Card.Img variant="top" src={cardimg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              ipsum fuga nulla alias magnam nihil pariatur dolores ex iure ab
              adipisci mollitia minus ipsam impedit, consequuntur dolorem soluta
              possimus animi!
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginTop: "20px" }}>
          <Card.Img variant="top" src={cardimg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              ipsum fuga nulla alias magnam nihil pariatur dolores ex iure ab
              adipisci mollitia minus ipsam impedit, consequuntur dolorem soluta
              possimus animi!
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;

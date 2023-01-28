import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdDeliveryDining } from "react-icons/md";

function Footer() {
  const data = [
    {
      id: 1,
      title: "Service",
      links: [
        "Online Order",
        "Pre Reservation",
        "24/7 Services",
        "Super Chefs",
      ],
    },
    {
      id: 2,
      title: "Quick Links",
      links: ["Menu", "Reviews", "Blogs", "Order Food"],
    },
    {
      id: 3,
      title: "About",
      links: ["Our Story", "Benefits", "Career", "Our Chefs"],
    },
    {
      id: 4,
      title: "Help",
      links: ["Contact", "Support", "FAQ"],
    },
  ];
  return (
    <footer id="main-footer">
      <Container>
        <Row>
          <div className="icon-container">
            <h3>
              <span>
                <MdDeliveryDining />
              </span>
              Delivery
            </h3>
            <hr />
          </div>
          {data.map((item) => (
            <Col md={3} sm={6} xs={6} key={item.id}>
              <div className="footer-container">
                <h3>{item.title}</h3>
                <ul>
                  {item.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

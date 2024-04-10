import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
function DarkVariantExample() {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="">Professional Highly Staffs</h3>
          <p className="">
            We deliver best in class web and mobile solutions taht will retain
            the attention of the target audience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="">Warranty Management IT</h3>
          <p className="">
            Every Company has different networking and security challenges. Our
            assessment reviews your current setup.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="">Infrastructure Technology</h3>
          <p className="">
            Ten things you should know about an IT provider's managed services.
            See how the other stack up against IT solutions.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="">Information Security</h3>
          <p className="">
            Many Managed Services Providers make ambitious promises that they
            fail to deliver. We back up our services.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;

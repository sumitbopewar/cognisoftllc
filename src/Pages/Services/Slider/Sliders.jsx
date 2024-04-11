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
          <small className="font-bold text-base flex">
            Case Studies
            <img src="/left.svg" alt="" className="ps-2" />
          </small>
          <h5>Professional Highly Staffs</h5>
          <p className="text-slate-400">
            We deliver best in class web and mobile solutions taht will retain
            the attention of the target audience.
          </p>
          <a href="#" className="bg-blue-500 rounded-full p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption>
          <small className="font-bold text-base flex">
            Case Studies
            <img src="/left.svg" alt="" className="ps-2" />
          </small>
          <h5>Warranty Management IT</h5>
          <p className="text-slate-400">
            Every Company has different networking and security challenges. Our
            assessment reviews your current setup.
          </p>
          <a href="#" className="bg-blue-500 rounded-full p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption>
          <small className="font-bold text-base flex">
            Case Studies
            <img src="/left.svg" alt="" className="ps-2" />
          </small>
          <h5>Infrastructure Technology</h5>
          <p className="text-slate-400">
            Ten things you should know about an IT provider's managed services.
            See how the other stack up against IT solutions.
          </p>
          <a href="#" className="bg-blue-500 rounded-full p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption>
          <small className="font-bold text-base flex">
            Case Studies
            <img src="/left.svg" alt="" className="ps-2" />
          </small>
          <h5>Information Security</h5>
          <p className="text-slate-400">
            Many Managed Services Providers make ambitious promises that they
            fail to deliver. We back up our services.
          </p>
          <a href="#" className="bg-blue-500 rounded-full p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;

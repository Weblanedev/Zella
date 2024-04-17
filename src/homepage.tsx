import { useEffect } from "react";
import { Link, useNavigate  } from 'react-router-dom'

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();

  const purchase = (name: any, price: any) => {
    const product = {
        name,
        price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    navigate("/billing");
}
  return (
    <>
  <section className="header">
    <div className="text-box">
      <h1>Premium and affordable products</h1>
      <p>
      Committed to leveraging cutting-edge technology and innovative solutions to connect buyers and sellers
      </p>
      <Link to="about-us" className="hero-btn">
        Visit Us to Know More
      </Link>
    </div>
  </section>
  <section className="about-us" id="discover">
    <div className="rowws">
      <div className="aboutt-col" data-aos="fade-left">
        <h1>Discover our story</h1>
        <p>
        Kagon Technologies Limited is a pioneering e-commerce platform dedicated to providing seamless online shopping experiences for customers worldwide. We are committed to leveraging cutting-edge technology and innovative solutions to connect buyers and sellers, offering a diverse range of products and services to meet the evolving needs of our global community.
        </p>
        <a className="hero-btn10" href="../About/about.html">
          Read More
        </a>
      </div>
      <div className="aboutt-col" data-aos="fade-right">
        <img
          src="https://images.pexels.com/photos/7007191/pexels-photo-7007191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image about the company"
          id="ProductImg"
        />
      </div>
    </div>
    <Link className="hero-btn12" to="/about-us">
      Read More
    </Link>
  </section>
  <section className="ctar">
    <h1 data-aos="fade-up">A Virtual Tour</h1>
    <p data-aos="fade-left">
    We actively engage with and support the communities we serve, giving back through charitable initiatives and social responsibility programs.
    </p>
    <Link
      to="/about-us"
      className="hero-btn2"
      data-aos="fade-down"
    >
      Read More
    </Link>
  </section>
  <section className="produce">
    <div className="rowss">
      <div className="produce-col">
        <section className="product-banner" data-aos="fade-right">
          <h1>
            NEW  <br /> IN STOCK
          </h1>
        </section>
      </div>
      <div className="produce-col">
        <div className="produce-img-row">
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Camera</h5>
              <p>$450</p>
              <p className="cart-btn" onClick={() => purchase("Camera", "450")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Lens</h5>
              <p>$150.00</p>
              <p className="cart-btn" onClick={() => purchase("Lens", "150")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Macbook pro</h5>
              <p>$999.99</p>
              <p className="cart-btn" onClick={() => purchase("Macbook pro", "999.99")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>GamePad</h5>
              <p>$130.00</p>
              <p className="cart-btn" onClick={() => purchase("GamePad", "130")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ctas">
    <h1 data-aos="fade-up">Our Approach</h1>
    <p data-aos="fade-left">
    We believe in the power of collaboration and teamwork, working closely with our sellers, partners, and employees to achieve shared goals and objectives.
    </p>
    <a
      href="/products"
      className="hero-btn3"
      data-aos="fade-down"
    >
      Shop Now
    </a>
  </section>
  <section className="producea">
    <div className="rowssa">
      <div className="produce-cola">
        <div className="produce-img-rowa">
          <div className="produce-img-cola" data-aos="fade-right">
            <div className="abouta">
              <img src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="small-imgs" />
            </div>
            <div className="abouta">
              <h5>Sweater</h5>
              <p>$34.45</p>
              <p className="cart-btn" onClick={() => purchase("Sweater", "34.45")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-cola" data-aos="fade-right">
            <div className="abouta">
              <img src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s" alt="" className="small-imgs" />
            </div>
            <div className="abouta">
              <h5>Jeans</h5>
              <p>$40.34</p>
              <p className="cart-btn" onClick={() => purchase("Jeans", "40.34")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-cola" data-aos="fade-right">
            <div className="abouta">
              <img src="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="small-imgs" />
            </div>
            <div className="abouta">
              <h5>Work Shoes</h5>
              <p>$95.34</p>
              <p className="cart-btn" onClick={() => purchase("Work Shoes", "95.34")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-cola" data-aos="fade-right">
            <div className="abouta">
              <img src="https://images.pexels.com/photos/53422/ironing-iron-press-clothing-53422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="small-imgs" />
            </div>
            <div className="abouta">
              <h5>Philips Iron</h5>
              <p>$127.89</p>
              <p className="cart-btn" onClick={() => purchase("Philips Iron", "127.89")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="produce-cola">
        <section className="product-bannera" data-aos="fade-left">
          <h1>
            BEST <br /> SELLING
          </h1>
        </section>
      </div>
    </div>
  </section>
  <section className="cta">
    <h4 data-aos="fade-down">
      Here to cater for all your product needs
    </h4>
    <Link
      to="contact-us"
      className="hero-btn4"
      data-aos="fade-right"
    >
      CONTACT US
    </Link>
  </section>
</>

  );
};

export default Homepage;

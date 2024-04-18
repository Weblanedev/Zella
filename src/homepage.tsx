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
      <h1>Welcome to Zella Technologies Limited</h1>
      <p>
      Where Every Gift Tells a Story and Every Connection Matters
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
        At Zella Technologies Limited, our journey is more than just a timeline – it's a tale of passion, innovation, and a relentless commitment to redefining the art of gifting and e-commerce. Step into our world and uncover the story behind our vision, values, and the people who make it all possible.
        </p>
      </div>
      <div className="aboutt-col" data-aos="fade-right">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3664iOgqjr765tWFQFo3f8-DK3mX2x4HPN3Waqng36KA2NtpqQRgVqE4KLY3aDEUYEs&usqp=CAU"
          alt="image about the company"
          id="ProductImg"
        />
      </div>
    </div>

  </section>
  <section className="produce">
    <div className="">
      <div className="produce-col">
        <section className="product-banner" data-aos="fade-right">
          <h1>
            NEW ARRIVALS
          </h1>
        </section>
          <p className="text-center text-md">A curated list of our most recent products</p>
      </div>
      <div className="produce-col">
        <div className="produce-img-row">
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Power bank</h5>
              <p>$50.00</p>
              <p className="cart-btn" onClick={() => purchase("Power bank", "50")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Elecric fan</h5>
              <p>$250.00</p>
              <p className="cart-btn" onClick={() => purchase("Elecric Fan", "250")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/4097206/pexels-photo-4097206.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Phone charger</h5>
              <p>$9.99</p>
              <p className="cart-btn" onClick={() => purchase("Phone charger", "9.99")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/8380417/pexels-photo-8380417.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Apple airpod</h5>
              <p>$300.00</p>
              <p className="cart-btn" onClick={() => purchase("Apple airpod", "300")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default Homepage;

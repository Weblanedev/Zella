import { useNavigate  } from 'react-router-dom'

import { useEffect } from "react";


const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();


  const purchase = (name: string, price: string | number) => {
    const product = {
        name,
        price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    navigate("/billing");
}
  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
       <section className="product">
    <div className="text-box">
      <h1>Premium and affordable products</h1>
      <p>
        Our products are carefully selected to meet the needs of our customers. We offer a wide range of products from electronics to clothing and accessories. 
      </p>
    </div>
  </section>

      <section className="flex bg-white w-full flex-col px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 pb-14 md:pb-20"> 
      <h1 className='text-4xl py-[100px] font-[600] text-[chocolate]'>All Products</h1>
       <div data-aos="fade-up" className="grid grid-cols-4 gap-[50px]">
          {/* {[1,2,4,4,4,4,4,4].map((genre) => (
            <div className="col-4">
              <img src="images/product-6-164x120.png" alt="" />
              <h4>Cottage Cheese</h4>
              <p>₦ 3500</p>
              <p className="cart-btn"><a href="../coming soon/comingsoon.html">Purchase</a></p>
            </div>
          ))} */}

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
                <a href="../coming soon/comingsoon.html">Purchase</a>
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
                <a href="../coming soon/comingsoon.html">Purchase</a>
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
                <a href="../coming soon/comingsoon.html">Purchase</a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

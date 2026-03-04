
import React, { useState, useEffect } from "react";

function ProductDealCard() {
  
  const expiryTime = new Date().getTime() + 60 * 60 * 1000;

  const calculateTimeLeft = () => {
    const difference = expiryTime - new Date().getTime();

    if (difference <= 0) return null;

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (value) => String(value).padStart(2, "0");

  return (
    <div className="container mt-4 bg-muted">
      <div className="card shadow">
        <div className="row g-0">

          {/* Product Image */}
          <div className="col-md-4">
            <img
              src="https://picsum.photos/300/200"
              className="img-fluid rounded-start"
              alt="PCB Product"
            />
          </div>

          
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Samsung A1 series</h5>
              <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda impedit eaque. Vitae inventore repudiandae quasi non, numquam provident accusamus doloribus quis veritatis laboriosam suscipit, cumque blanditiis libero dicta consequuntur!              </p>

              <h6 className="text-success">₹1,999</h6>

             
              {timeLeft ? (
                <p className="text-danger fw-bold mt-3">
                  Offer ends in: {format(timeLeft.hours)}:
                  {format(timeLeft.minutes)}:
                  {format(timeLeft.seconds)}
                </p>
              ) : (
                <p className="text-danger fw-bold mt-3">
                  Deal Expired
                </p>
              )}

              <button className="btn btn-dark mt-2">
                Buy Now
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDealCard;
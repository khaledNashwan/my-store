import React, { useState } from "react";
import "./cardBooksModel.css";
import { BsFillCartPlusFill, BsFillEyeFill } from "react-icons/bs";
import FiveStar from "./FiveStar";
import FourStar from "./FourStar";
import FourHalf from "./FourHalf";

const CardBooksModel = ({ id, title, image, price , rating , reviews }) => {
  
  const [openModel , setOpenModel] = useState(false);

  return (
    <>
      <div
        key={id}
        className="CardBooksModel d-flex flex-column justify-content-center align-items-center gap-1"
      >
        <img src={image} alt={title} />
        <p className="fw-bold">{title}</p>
        <div className="d-flex justify-content-center align-items-center gap-3 " >
          <p>
            {
          rating == 5 ? <FiveStar /> : rating == 4.5 ? <FourHalf /> :  rating == 4 ? <FourStar /> : null
          }
          </p>
          <p>{reviews} reviews</p>
        </div>
        <p className="text-danger fw-bold">${price}</p>

        <div className="d-flex justify-content-center align-items-center gap-3">
          <p>
            {" "}
            <BsFillEyeFill />
          </p>
          <p>
            {" "}
            <BsFillCartPlusFill onClick={() => setOpenModel(!openModel)} />
          </p>
        </div>
      </div>
    </>
  );
};

export default CardBooksModel;

import React from 'react';
import Rating from 'react-rating';
import IsAdmin from '../Auth/IsAdmin';

const BookCard = (props) => {
    
  const {image, title, price} = props.info;
  const cost = props.info.price === "$0.00" == false ? props.info.price  : props.info.price = "$20.99";

  if(IsAdmin()){
    return (
      <div className="card-container"> 
        <img src={image} alt="" />
        <div className="desc">
          <h2>{title}</h2>
          <p>{cost}</p>
        </div>
        <Rating />
        <div className="buttons">
          <button className="btn-success"> Add to Cart</button>
        </div>
        <div>
          <button className="btn-primary"> Add to Favourite</button>
        </div>
      </div>
    );
  }
  else if(localStorage.getItem('user') === null) {
    return (
      <div className="card-container"> 
        <img src={image} alt="" />
        <div className="desc">
          <h2>{title}</h2>
          <p>{cost}</p>
        </div>
        <Rating />
        <div className="buttons">
          <button className="btn-success"> Add to Cart</button>
        </div>
        <div>
          <button className="btn-primary"> Add to Favourite</button>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="card-container"> 
        <img src={image} alt="" />
        <div className="desc">
          <h2>{title}</h2>
          <p>{cost}</p>
        </div>
        <Rating />
        <div className="buttons">
          <button className="btn-danger"> Remove </button>
        </div>
        <div>
          <button className="btn-info"> Edit </button>
        </div>
      </div>
    )
  }
}

export default BookCard;

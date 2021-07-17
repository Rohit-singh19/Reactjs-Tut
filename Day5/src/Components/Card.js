import React from 'react'

const Card = (props) => {
   return(
    <div className="col-4">
    <div className="card" style={{width: "18 rem"}}>
      <img
        src={props.src}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
         {props.cardDescription}
        </p>
        <a href="#" className="btn btn-success">{props.buttonText}</a>
      </div>
    </div>
  </div>
 
   )
}

export default Card
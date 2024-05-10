import React from 'react';

const Card = ({element,index}) => {
    return (
        <div key={index}>    
  <div className="col h-100">
    <div className="card h-100">
      <img src={element.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{element.Title}</h5>
        <p className="card-text">{element.Content}</p>
        <p className="card-text text-muted">{element.Date}</p>
      </div>
    </div>
  </div>
  </div>

        
    );
};

export default Card;
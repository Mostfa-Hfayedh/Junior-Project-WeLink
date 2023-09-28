import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <a className="cookieDescription" href={props.link.url}>
          {props.link.url}
        </a>
        <div className="buttonContainer">
          <button className="acceptButton" onClick={(e)=>{
            e.preventDefault()
            props.goToUpdate(props.index)
          }} >Update</button>
          <button className="declineButton" onClick={(e)=>{
            e.preventDefault()
            props.handleDelete(props.link.id)
          }}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

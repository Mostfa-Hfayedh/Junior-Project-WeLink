import React, { useState } from "react";

const CreateLink = (props) => {
    const [link,setLink] = useState('')
    
  return (
    <div>
      <form className="subscribe-form">
        <input
          type="text"
          placeholder="https//:example.com"
          className="subscribe-input"
        onChange={(e)=>{
            setLink(e.target.value)
        }} />
        <button className="subscribe-btn" onClick={(e)=>{
            e.preventDefault()
            props.handleCreateLink({url:link})
        }} >Add</button>
      </form>
    </div>
  );
};

export default CreateLink;

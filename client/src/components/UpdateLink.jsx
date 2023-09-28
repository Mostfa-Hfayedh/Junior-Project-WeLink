import React, { useState } from 'react'

const UpdateLink = (props) => {
    const [link,setLink] = useState(props.link.url)
  return (
    <div>
        <form className="subscribe-form">
        <input
          type="text"
          placeholder="https//:example.com"
          className="subscribe-input"
          defaultValue={link}
        onChange={(e)=>{
            setLink(e.target.value)
        }} />
        <button className="subscribe-btn" onClick={(e)=>{
            e.preventDefault()
            props.handleUpdate(props.link.id,{url:link})
        }} >Update</button>
      </form>
    </div>
  )
}

export default UpdateLink
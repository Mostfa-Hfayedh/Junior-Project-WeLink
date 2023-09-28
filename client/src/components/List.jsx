import React from 'react'
import Card from './Card.jsx'
const List = (props) => {
  return (
    <div className='container' >
        {props.links.map((e,i)=>{
            return <Card key={i} link={e} getUserName={props.getUserName} index={i} goToUpdate={props.goToUpdate} handleDelete={props.handleDelete} />
        })}
    </div>
  )
}

export default List
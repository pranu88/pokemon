import React from 'react'

function Show(props) {
  return (
    <div>
    <h1>Gotta Catch 'Em All" </h1>
   <h2>{props.pm.name.charAt(0).toUpperCase()+props.pm.name.substring(1)}</h2>
   <img src={`${props.pm.img}.jpg`}/>
   <a href="/pokemon">Back</a>
    </div>
  )
}

export default Show
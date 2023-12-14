import React from 'react'


function Index(props) {
    const myStyle = {
        color: 'black',
        fontWeight:'bold',
        fontSize:"20px",
        textDecoration: 'none'
        // backgroundColor: '#000000',
        };
    
  return (
    <div>
     <h1 style={{textAlign:"center"}}>'See All The Pokemon!'</h1>
      <ul>{
        props.data.map((pm,i) => {
            return(<li><a href={`/pokemon/${i}`} style ={myStyle}>{pm.name.charAt(0).toUpperCase()+pm.name.substring(1)}</a></li>)
        })
      }</ul>
    </div>
  )
}

export default Index
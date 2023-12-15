import React from 'react'


function Index(props) {
    const myStyle = {
        color: 'black',
        fontWeight:'bold',
        fontSize:"20px",
        textAlign:'center',
        // border:'solid lightblue',
        borderRadius:'20px',
        margin:'1em'
        };
    
  return (
    <div>
     <h1 style={{textAlign:"center"}}>'See All The Pokemon!'</h1>
      <ul>{
        props.data.map((pm,i) => {
            return(<li style ={myStyle}><a href={`/pokemon/${i}`} style={{textDecoration: 'none', color:"black"}}>{pm.name.charAt(0).toUpperCase()+pm.name.substring(1)}</a></li>)
        })
      }</ul>
    </div>
  )
}

export default Index
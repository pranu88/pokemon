import React from 'react'

function New() {
    const mystyle ={
        margin:'1em',
        borderRadius:'20px',
        color:'green',
        fontWeight:'bold',
        backgroungColor:'lightblue'
    };

  return (
    
    <div>
      <h1>Create A new Pokemon</h1>

      <form action='/pokemon' method='POST'><br/>

            Pokemon Name: <input style={mystyle} type='text' name='name'></input><br/>

            Pokemon Image URL: <input style={mystyle} type='text' name='img'></input><br/>

        <input style={mystyle} type="submit" value="Create Pokemon" /><br/>

     </form>

        <a href="/pokemon" style={mystyle}>Back</a>


    </div>
  )
}

export default New
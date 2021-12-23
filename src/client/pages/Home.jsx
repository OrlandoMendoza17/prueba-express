import React from 'react'

const Home = () => {
  return (
    <div style={{padding: "10px", backgroundColor: "cyan"}}>
      Hola aquí desde home
      <button style={{display: "block", marginTop: "10px"}} onClick={()=> alert("Hi there!")}>
        PUSH ME
      </button>
    </div>
  )
}

export default Home;

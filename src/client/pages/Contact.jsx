import React from 'react'

const Contact = () => {
  return (
    <div style={{padding: "10px", backgroundColor: "red"}}>
      Hola aquí desde Contact
      <button style={{display: "block", marginTop: "10px"}} onClick={()=> alert("Hi motherFucker!")}>
        PUSH ME
      </button>
    </div>
  )
}

export default Contact;
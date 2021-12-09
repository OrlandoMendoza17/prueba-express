import express from "express"

const port = 3000;

const app = express();

app.get("*", (request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html>
      <head>
      
      <style>
      
        body{
          
          font-family: "arial";
          
        }
        
        article{
          padding: 10px;
          background-color: cyan;
          font-weight: 700;
        }
      
      </style>
      
      </head>
      <body>
        <article>
          Hola doctor, estás en la dirección: "${request.url}"
        </article>  
      </body>
    
    </html>
  `)
})

app.listen(port, (error) => {

  if (error) 
    console.log("Ha habido un error mi negro :'(")
  else 
    console.log(`The server is running on ${port} port`)

})
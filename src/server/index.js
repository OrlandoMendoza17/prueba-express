import React from "react";
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import App from "../client/App"

import express from "express"
import { getManifest, getSources } from "./getManifest";

const port = 9000;

const app = express();

const router = express.Router()

app.use((request, response, next) => {
  if (!request.hashManifest) request.hashManifest = getManifest()
  next();
})
app.use(express.static(`${__dirname}/public`))

const ServerTemplate = ({ children, manifest }) => {
  let cssSources = getSources(".css", manifest)
  let jsSources = getSources(".js", manifest)

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prueba de SSR con Express</title>
        <link rel="shortcut icon" href="https://i.imgur.com/3A4CAU7.png" type="image/x-icon" />
        {
          cssSources.map((source, i) =>
            <link rel="stylesheet" href={source} type="text/css" key={i}></link>
          )
        }
      </head>

      <body>
        <div id="app">
          {children}
        </div>
        {
          jsSources.map((source, i) =>
            <script src={source} type="text/javascript" key={i}></script>
          )
        }
      </body>
    </>
  )
}

router.get("*", (request, response) => {

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={request.url}>
      <ServerTemplate manifest={request.hashManifest}>
        <App />
      </ServerTemplate>
    </StaticRouter>
  )

  response.send(`
    <!DOCTYPE html>
    ${html}
  `)
})

app.use("/", router)

app.listen(port, (error) => {

  if (error)
    console.log("Ha habido un error mi negro :'(")
  else
    console.log(`The server is running on ${port} port`)

})
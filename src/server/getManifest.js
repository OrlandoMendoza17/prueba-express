import fs from "fs";

export const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`))
  } catch (error) {
    console.log(error)    
  }
}

export const getSources = (type, manifest) =>{
  const sources = Object.entries(manifest)
  
  const sourcetypes = (
    sources
      .filter(source => source[0].includes(type))
      .map(source => source[1])
      .reverse()
  )
  
  return sourcetypes;
}
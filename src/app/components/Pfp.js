
function Pfp({ meta }) {
  return <img 
    src={meta.imgLink}
    style={{width: meta.radius, height: meta.radius, objectFit:'cover', borderRadius:'50%'}} 
    alt={meta.alt}
  />
}

export { Pfp }

function BZtxt({ txt }) {
  return (
    <div style={{display: 'inline'}}>
      <p style={{display: 'inline', color: 'rgb(238, 0, 254)', textShadow: '0px 0px 10px rgb(222, 218, 218)'}}>{txt}</p>
    </div>
  )
}

function Inlinetxt({ txt, color, marginLeft, marginRight }) {
  return (
    <div style={{display: 'inline'}}>
      <p style={{display: 'inline', marginLeft: marginLeft, marginRight: marginRight, color: color}}>{txt}</p>
    </div>
  )
}

export { BZtxt, Inlinetxt }
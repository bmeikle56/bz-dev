
/// [B]old Bullet component
///
function BBullet({ txt, color }) {
  function Bullet() {
    const bulletStyle = {
      height: '5px', 
      width: '5px', 
      background: color,
      borderRadius: '5px',
      marginTop: '2px',
      // marginLeft: '15px'
    }

    return <div style={bulletStyle}></div>
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
      <Bullet/>
      <b style={{color: color, fontSize: '14px'}}>{txt}</b>
    </div>
  )
}

export { BBullet }
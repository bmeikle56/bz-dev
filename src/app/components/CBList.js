
function CBList({ txt }) {
  return (
  <div style={{display: 'flex', height: '25px', alignItems: 'center', marginRight: 'auto', paddingLeft:'10px', gap: '8px'}}>
    <input style={{marginTop: '3px'}} id={`checkbox-${txt}`} type='checkbox' name='cb' value='Bike'></input>
    <label htmlFor={`checkbox-${txt}`}></label>
    <p style={{color: 'rgb(220,220,220)', fontSize: '14px'}}>{txt}</p>
  </div>
  )
} 

export { CBList }
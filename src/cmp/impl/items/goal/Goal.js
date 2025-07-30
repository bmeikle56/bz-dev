
import { BBullet, Shell } from '../../../Components'

function Goal({ meta, isToggled, onClick }) {

  // functi

  function Body({ palette }) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        // justifyContent: 'center'
      }}>
        <p style={{color: palette.text, fontSize: 12, margin: 0, paddingBottom: 6}}>
          Goal
        </p>
        <div style={{
          height: 0.5, 
          width: 80, 
          background: 'linear-gradient(to right, rgb(0,0,0), rgb(60,60,60), rgb(0,0,0))',
        }}></div>
        <b style={{color: palette.text, fontSize: 14, paddingTop: 32, paddingBottom: 20}}>{meta.title}</b>
        <div style={{display: 'flex', marginRight: 'auto', padding: '12px 0 12px 0'}}>
          <b style={{color: palette.text, fontSize: 14, paddingRight: 9}}>Criteria:</b>
          <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 10}}>
            {meta.criteria.map((bullet, i) => {return <BBullet key={i} txt={bullet.txt} color={palette.text}/>})}
          </div>
        </div>
        <div style={{display: 'flex', textAlign: 'left', width: '100%', gap: 10, padding: '0 0 12px 0'}}>
          <b style={{color: palette.text, fontSize: 14}}>Deadline:</b>
          <p style={{color: palette.text, fontSize: 14, margin: 0}}>{meta.deadline}</p>
        </div>
      </div>
    )
  }
  return (
    <Shell body={Body} isToggled={isToggled} onClick={onClick}/> 
  )
}

export { Goal }

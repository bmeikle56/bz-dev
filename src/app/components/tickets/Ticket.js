
import { motion } from 'motion/react'
import { Pfp } from '../Pfp'

// Tickets will start untoggled
// once a ticket is clicked, we toggle it and its parents and children
// if another ticket is clicked, we toggle that and its parents and children

function Badge({ className, txt, txtColor, backgroundColor }) {
  return (
    <div className={className} style={{display: 'flex', marginRight:'auto', gap: '8px'}}>
      <div style={{display:'flex', background: backgroundColor, height:'fit-content', borderRadius: '4px', padding: '3px 5px 3px 5px'}}>
        <p style={{color: txtColor, fontSize: '14px', margin: 0}}>{txt}</p>
      </div>
    </div>
  )
}

const toggledPalette = {
  border: 'rgb(100,100,100)',
  author: 'rgb(150,150,150)',
  text: 'rgb(255,255,255)',
  gray: 'rgb(50,50,50)',
  type: 'rgb(238, 0, 254)'
}

const untoggledPalette = {
  border: 'rgb(30,30,30)',
  author: 'rgb(80,80,80)',
  text: 'rgb(100,100,100)',
  gray: 'rgb(20,20,20)',
  type: 'rgb(147, 0, 158)'
}

function Ticket({ meta, isToggled, isMerging }) {
  const palette = isToggled ? toggledPalette : untoggledPalette

  function MergingAnim() {
    return (
      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <pre style={{color: palette.text, fontSize: '12px'}}>Merging</pre>
        <div style={{width: '25px', background: 'rgb(70,70,70)', height: '1px'}}>
          <motion.div 
          style={{
            borderRadius: '50%', 
            height: '4px', 
            width: '4px', 
            background: 'rgb(238, 0, 254)',
            marginTop: '-1px'
          }}
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', repeatDelay: 0.5 }}
          />
        </div>
      </div>
    )
  }

  return (
    <div style={{
      height: 'fit-content',
      width: 'fit-content',
      maxWidth: '350px',
      padding: '20px 20px 10px 20px',
      border: `1px solid ${palette.border}`, 
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div style={{display:'flex', marginRight: 'auto', alignItems: 'center'}}>
        <div style={{display: 'flex', marginRight: 'auto', alignItems: 'center', gap: '8px', paddingBottom:'10px'}}>
          <Badge className={'item-app'} txt={meta.app} txtColor={palette.text} backgroundColor={palette.gray}/>
          <b style={{color: palette.text, fontSize: '14px'}}>{meta.title}</b>
        </div>
        <div style={{paddingLeft: '50px', marginBottom: '8px'}}>
          <Badge className={'item-status'} txt={meta.status} txtColor={'white'} backgroundColor={meta.statusColor}/>
        </div>
      </div>
      <div style={{display: 'flex', marginRight: 'auto', alignItems: 'center', gap: '8px'}}>
        <Pfp meta={{imgLink: meta.pfp, radius: 25, alt: 'Author picture'}}/>
        <p style={{color: palette.author, fontSize: '12px'}}>{meta.author}</p>
      </div>
      <div style={{display:'flex', marginRight: 'auto'}}>
        {meta.desc()}
      </div>
      <div style={{display:'flex', marginRight: 'auto', alignItems: 'center', gap: '8px'}}>
        <div style={{background: 'rgb(50,50,50)', borderRadius: '4px', padding: '3px 3px 1px 3px'}}>
          <i className='fa fa-code-branch' style={{color:'white', fontSize: '14px'}}></i>
        </div>
        {isMerging 
          ? MergingAnim()
          : <pre style={{color: palette.text, fontSize: '12px'}}>{meta.branch}</pre>}
      </div>
    </div>
  )
}

export { Ticket }
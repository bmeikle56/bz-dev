
import '@fortawesome/fontawesome-free/css/all.min.css'

import { motion } from 'motion/react'

import { Pfp } from '../../Pfp'

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

function MergingAnim({ color }) {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <pre style={{color: color, fontSize: '12px'}}>Merging</pre>
      <div style={{width: '25px', background: 'rgb(70,70,70)', height: '1px', marginBottom:'-1px'}}>
        <motion.div 
        style={{
          borderRadius: '50%', 
          height: '4px', 
          width: '4px', 
          background: 'rgb(238, 0, 254)',
          marginTop: '-1.5px'
        }}
        initial={{ x: -2 }}
        animate={{ x: 22 }}
        transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut', repeatDelay: 0.5 }}
        />
      </div>
    </div>
  )
}

function Notes({ notes }) {
  // split notes by comma and trim whitespace
  const items = notes.split(',').map(item => item.trim())

  return <div style={{display: 'flex', alignItems:'start', flexDirection:'column'}}>
    {items.map((item, index) => (
      <p style={{color: 'white', paddingTop: 5, paddingBottom: 5, margin: 5}} key={index}>&rArr; {item}</p>
    ))}
  </div>
}

function Work({ id, repo, status, dev, tag, pfp, title, notes, branch, isToggled, isMerging, onClick }) {
  const palette = isToggled ? toggledPalette : untoggledPalette

  const tagColors = {
    new: 'rgba(255, 0, 255, 0.33)',
    active: 'rgba(255, 0, 255, 0.66)',
    merging: 'rgba(255, 0, 255, 1)'
  }

  return (
    <button key={id} style={{padding: 0, background: 'transparent', border: 'none'}} onClick={onClick}>
      <div style={{
        height: 'fit-content',
        width: 'fit-content',
        maxWidth: '400px',
        padding: '20px 20px 10px 20px',
        border: `1px solid ${palette.border}`, 
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
        { /* Title portion of the work item */ }
        <div style={{display:'flex', maxWidth: '410px', width: '100%', alignItems: 'center', paddingBottom: '8px'}}>
          <div style={{display: 'flex'}}>
            <Badge className={'item-app'} txt={repo} txtColor={palette.text} backgroundColor={palette.gray}/>
          </div>
          <span style={{display: 'flex', flex: 1, color: palette.text, fontSize: '14px', padding: '0 8px 0 8px'}}>{title}</span>
          <div style={{display: 'flex'}}>
            <Badge className={'item-status'} txt={tag} txtColor={'white'} backgroundColor={tagColors[status]}/>
          </div>
        </div>

        { /* Author portion of the work item */ }
        <div style={{display: 'flex', marginRight: 'auto', alignItems: 'center', gap: '8px'}}>
          <Pfp meta={{imgLink: pfp, radius: 25, alt: 'Dev picture'}}/>
          <p style={{color: palette.author, fontSize: '12px'}}>{dev}</p>
        </div>
        
        { /* Description portion of the work item */ }
        <div style={{display:'flex', marginRight: 'auto'}}>
          <Notes notes={notes}/>
        </div>

        { /* Branch portion of the work item */ }
        <div style={{display:'flex', marginRight: 'auto', alignItems: 'center', gap: '8px'}}>
          <div style={{background: palette.gray, borderRadius: '4px', padding: '3px 3px 1px 3px'}}>
            <i className='fa fa-code-branch' style={{color: palette.text, fontSize: '14px'}}></i>
          </div>
          {isMerging 
            ? MergingAnim({ color: palette.text })
            : <pre style={{color: palette.text, fontSize: '12px'}}>{branch}</pre>}
        </div>
      </div>
    </button>
  )
}


function RichWork({ meta, isToggled, isMerging, onClick }) {
  const palette = isToggled ? toggledPalette : untoggledPalette

  return (
    <button style={{padding: 0, background: 'transparent', border: 'none'}} onClick={onClick}>
      <div style={{
        height: 'fit-content',
        width: 'fit-content',
        maxWidth: '400px',
        padding: '20px 20px 10px 20px',
        border: `1px solid ${palette.border}`, 
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
        { /* Title portion of the work item */ }
        <div style={{display:'flex', maxWidth: '410px', width: '100%', alignItems: 'center', paddingBottom: '8px'}}>
          <div style={{display: 'flex'}}>
            <Badge className={'item-app'} txt={meta.app} txtColor={palette.text} backgroundColor={palette.gray}/>
          </div>
          <span style={{display: 'flex', flex: 1, color: palette.text, fontSize: '14px', padding: '0 8px 0 8px'}}>{meta.title}</span>
          <div style={{display: 'flex'}}>
            <Badge className={'item-status'} txt={meta.status} txtColor={'white'} backgroundColor={meta.statusColor}/>
          </div>
        </div>

        { /* Author portion of the work item */ }
        <div style={{display: 'flex', marginRight: 'auto', alignItems: 'center', gap: '8px'}}>
          <Pfp meta={{imgLink: meta.pfp, radius: 25, alt: 'Author picture'}}/>
          <p style={{color: palette.author, fontSize: '12px'}}>{meta.author}</p>
        </div>
        
        { /* Description portion of the work item */ }
        <div style={{display:'flex', marginRight: 'auto'}}>
          {meta.desc()}
        </div>

        { /* Branch portion of the work item */ }
        <div style={{display:'flex', marginRight: 'auto', alignItems: 'center', gap: '8px'}}>
          <div style={{background: palette.gray, borderRadius: '4px', padding: '3px 3px 1px 3px'}}>
            <i className='fa fa-code-branch' style={{color: palette.text, fontSize: '14px'}}></i>
          </div>
          {isMerging 
            ? MergingAnim({ color: palette.text })
            : <pre style={{color: palette.text, fontSize: '12px'}}>{meta.branch}</pre>}
        </div>
      </div>
    </button>
  )
}

export { Work, RichWork }
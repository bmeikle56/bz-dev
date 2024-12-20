
'use client'

import { motion } from 'motion/react'

const bzlistItems = [
  {txt: 'We believe in a message-driven culture'},
  {txt: 'Productivity over processes and legacy'},
  {txt: 'Agile has never been so lightweight'}
]

function BZList({ items }) {
  return (
    <div>
      {bzlistItems.map((item, i) => {
        return <div key={i} style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <p className='bzlis-item'>&rArr;</p>
          <p className='bzlis-item'>{item.txt}</p>
        </div>
      })}
    </div>
  )
}

function EndMeeting() {
  const imgLinks = [
    'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
    'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
    'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
    'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
    'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
    'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg'
  ]

  const pfpMeta = (imgLink) => {
    return {
      imgLink: imgLink,
      radius: 53,
      alt: 'Profile picture'
    }
  }

  function CloseButton() {
    const style = { 
      position: 'absolute',
      zIndex: '2',
      height:'7px', 
      width: '7px', 
      margin: '0 0 125px 200px',
      borderRadius: '5px', 
      background: 'red'
    }
    return (
      <div style={style}></div>
    )
  }

  function Popup() {
    const style = {
      background: 'rgb(235,235,235)',
      borderRadius: '8px',
      width: '100px',
      height: '50px',
      position: 'absolute',
      zIndex: '2',
      textAlign: 'center'
    }
    return (
      <div style={style}>
        <p style={{color: 'black', fontSize: '8px', marginBottom: '10px'}}>Meeting has ended</p>
        <div style={{background: 'rgb(200,200,200)', width: '100px', height: '0.5px'}}></div>
        <p style={{color: 'rgb(0, 167, 250)', fontSize: '8px'}}>Close</p>
      </div>
    )
  }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: '150px', width: '225px', background: 'white', borderRadius: '10px'}}>
        <div style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:'12px'}}>
          {imgLinks.map((imgLink, i) => { 
            return <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.25) }}
              >
                <Pfp meta={pfpMeta(imgLink)}/>
            </motion.div>
          })}          
        </div>
        <CloseButton/>
        <Popup/>
      </div>
    </div>
  )
}

function Pfp({ meta }) {
  return <img 
    src={meta.imgLink}
    style={{width: meta.radius, height: meta.radius, objectFit:'cover', borderRadius:'50%'}} 
    alt={meta.alt}
  />
}

function IntroDiv() {
  return (
    <div id='intro'>
      <Title/>
      <Subtitle/>
      <BZList items={bzlistItems}/>
    </div>
  )
}

function AnimDiv() {
  return (
    <div id='intro'>
      <Anim/>
      <EndMeeting/>
    </div>
  )
}

function Anim() {
  return (
    <div style={{display: 'flex'}}>
      <p>I will display &#128187;</p>
      
      <p>I will display &#128187;</p>
    </div>
  )
}

function Title() {
  return (
    <div>
      <p id='title'>Berzerk</p>
    </div>
  )
}

function Subtitle() {
  return (
    <div>
      <p id='subtitle'>Accelerated Agile Development</p>
    </div>
  )
}

const tabs = [
  {txt: 'Why Berzerk', action: () => {console.log('tap!')}},
  {txt: 'Who we are', action: () => {console.log('tap!')}},
  {txt: 'Log in', action: () => {console.log('tap!')}},
  {txt: 'Sign up', action: () => {console.log('tap!')}},
]

function TabBar({ tabs }) {
  return (
    <div id='tabbar'>
      {tabs.map((tab, i) => {
        return <button key={i} className='tab-btn' onClick={tab.action}>
          <p style={{color:'white'}} className='tab'>{tab.txt}</p>
        </button>
      })}
    </div>
  )
}

function ContentPair({ left, right }) {
  return (
    <div className='content-pair'>
      {[left, right].map((k, i) => {
        return <div key={i} className='content'>
          {k()}
        </div>
      })}
    </div>
  )
}

function Footer() {
  return (
    <div id='footer'>
      
    </div>
  )
}

function Vdiv() {
  return (
    <div className='vdiv'></div>
  )
}

const sections = [
  {left: IntroDiv, right: AnimDiv},
  // {left: Title, right: Title},
  // {left: Title, right: Title},
]

export default function HomePage() {
  return (
    <div>
      <TabBar tabs={tabs}/>
      <Vdiv/>
      {sections.map((section, i) => {
        return <ContentPair key={i} left={section.left} right={section.right}/>
      })}
    </div>
  )
}
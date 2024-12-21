
'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { CBList } from '../components/CBList'
import { Pfp } from '../components/Pfp'
import { Spacer } from '../components/Spacer'
import { TabBar } from '../components/TabBar'
import { Vdiv } from '../components/Vdiv'
import '@fortawesome/fontawesome-free/css/all.min.css'

function BZList({ items, height }) {
  return (
    <div style={{display:'flex', flexDirection: 'column', height: height}}>
      {items.map((item, i) => {
        return <div key={i} style={{display:'flex', flexGrow: 1, alignItems:'center', gap:'8px'}}>
          <p style={{margin: 0, color: 'rgb(60,60,60)'}}>&rArr;</p>
          <p style={{margin: 0, color: 'rgb(220,220,220)'}}>{item.txt}</p>
        </div>
      })}
    </div>
  )
}

function BZList2({ items, height }) {
  return (
    <div style={{display:'flex', flexDirection: 'column', height: height}}>
      {items.map((item, i) => {
        return <div key={i} style={{display:'flex', flexGrow: 1, alignItems:'center', gap:'8px'}}>
          <p style={{margin: 0, color: 'rgb(238, 0, 254)'}}>&diams;</p>
          <p style={{margin: 0, color: 'rgb(220,220,220)'}}>{item.txt}</p>
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: '150px', width: '225px', background: 'white', borderRadius: '10px'}}>
        <div style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:'12px'}}>
          {imgLinks.map((imgLink, i) => { 
            return <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + (i * 0.25) }}
              >
                <Pfp meta={pfpMeta(imgLink)}/>
            </motion.div>
          })}          
        </div>
        <CloseButton/>
        <motion.div
          style={{position: 'absolute', zIndex: '2', display:'flex', justifyContent:'center', alignItems:'center'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7 }}
        >
          <Popup/>
        </motion.div>
      </div>
    </motion.div>
  )
}

function IntroDiv() {
  return (
    <div id='intro'>
      <Title/>
      <Subtitle/>
      <BZList items={[
        {txt: 'We believe in a message-driven culture'},
        {txt: 'Productivity over processes and legacy'},
        {txt: 'Agile has never been so lightweight'}
      ]} height={'120px'}/>
      <TryUs/>
    </div>
  )
}

function AnimDiv() {
  return (
    <div id='intro' style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '250px',
      marginTop: '100px',
      gap: '120px'
    }}>
      <Anim/>
      <EndMeeting/>
    </div>
  )
}



function Anim() {
  const [state, setState] = useState(0)

  setTimeout(() => {
    setState([...Array(8)].map(_ => Math.round(Math.random())).join(''))
  }, 80)

  const leftLaptopMeta = {
    imgLink: 'mac1.png',
    width: '55px',
    height: '60px',
    margin: '',
    alt: 'Laptop'
  }

  const rightLaptopMeta = {
    imgLink: 'mac2.png',
    width: '55px',
    height: '38px',
    margin: '11px 0 0 0',
    alt: 'Laptop'
  }

  function Laptop({ meta }) {
    return <img 
      src={meta.imgLink}
      style={{margin: meta.margin, width: meta.width, height: meta.height}} 
      alt={meta.alt}
    />
  }

  return (
    <div style={{display: 'flex', gap:'10px'}}>
      <Laptop meta={leftLaptopMeta}/>
      <motion.div
      style={{marginTop: '10px', width: '180px'}}
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 100, opacity: [0,1,0] }}
      transition={{
        duration: 1,
        delay: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 8
      }}
      >
        <pre id='txt-transfer' className='txt-glow'>{state}</pre>
      </motion.div>
      <Laptop meta={rightLaptopMeta}/>
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

function TryUs() {
  return <div style={{display: 'flex', gap: '5px'}}>
    <p style={{color: 'rgb(220,220,220)'}}>Try</p>
    <p style={{color: 'rgb(238, 0, 254)', textShadow: '0px 0px 10px rgb(222, 218, 218)'}}>Berzerk</p>
    <p style={{color: 'rgb(220,220,220)'}}>free for 30 days</p>
  </div>
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


// max chars for ticket titles

// no more links to Figmas
// embedded video and screenshot
// aesthetically pleasing
// no scrolling
// acceptance criteria automatically defaulted on ticket with interactible checkbox

// blocked is the same as ready


function TicketBenefits() {
  return (
    <div>
      <BZList2 items={[
        {txt: 'Only the data that matters'},
        {txt: 'Seamlessly linked branches'},
        {txt: 'Simply drag & drop screenshots'},
        {txt: 'Elegant modern design'},
      ]} height={'120px'}/>
    </div>
  )
}

function TicketDesc() {
  function BBullet({ txt }) {
    function Bullet() {
      const bulletStyle = {
        height: '5px', 
        width: '5px', 
        background: 'rgb(220,220,220)',
        borderRadius: '5px',
        marginTop: '2px',
        marginLeft: '15px'
      }
  
      return <div style={bulletStyle}></div>
    }

    return (
      <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
        <Bullet/>
        <b style={{color: 'white', fontSize: '14px'}}>{txt}</b>
      </div>
    )
  }

  function DescTxt({ txt }) {
    return <p style={{color: 'rgb(220,220,220)', fontSize: '14px'}}>{txt}</p>
  }

  function LoginDesign() {
    function LoginField({ txt }) {
      return (
        <div style={{border: '1px solid rgb(26,26,26)', height: '18px', width: '120px', borderRadius: '4px'}}>
          <p style={{color:'rgb(60,60,60)', position: 'absolute', margin: '5px 0 0 5px', fontSize: '8px'}}>{txt}</p>
        </div>
      )
    }

    function Decoration() {
      const json = {
        usr: 'brd',
        pwd: '82$!'
      }

      return (
        <div>
          <pre style={{
            fontSize: '8px',
            color: 'rgb(160,160,160)', 
            textShadow: '0px 0px 15px rgb(46, 190, 238), 0px 0px 12px rgb(46, 190, 238), 0px 0px 15px rgb(46, 190, 238)'
          }}>
            {JSON.stringify(json, null, 2)}
          </pre>
        </div>
      )
    }

    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Spacer height={'5px'}/>
        <p style={{color: 'rgb(238, 0, 254)', textShadow: '0px 0px 10px rgb(222, 218, 218)', fontSize: '20px', marginBottom:8}}>Berzerk</p>
        <Decoration/>
        <Spacer height={'10px'}/>
        <LoginField txt={'Email'}/>
        <Spacer height={'5px'}/>
        <LoginField txt={'Secure password'}/>
        <Spacer height={'5px'}/>
        <button style={{
          border: 'none',
          background:'rgb(238, 0, 254)', 
          width: '120px',
          height: '18px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <b style={{color: 'rgb(220,220,220)', fontSize: '8px'}}>Log in</b>
        </button>
        <Spacer height={'8px'}/>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <p style={{color: 'rgb(220,220,220)', fontSize: '8px'}}>Don't have an account?</p>
          <b style={{color: 'rgb(238, 0, 254)', fontSize: '8px', textShadow: '0px 0px 5px rgb(192, 191, 191)'}}>Create one</b>
        </div>
        <Spacer height={'20px'}/>
        <CBList txt={'Golden image & unit tests'}/>
        <CBList txt={'Code merged + pipeline succeeded'}/>
      </div>
    )
  }

  return (
    <div style={{}}>
      <DescTxt txt={'The login screen should allow users to enter'}/>
      <BBullet txt={'email'}/>
      <Spacer height={'3px'}/>
      <BBullet txt={'secure password'}/>
      <Spacer height={'5px'}/>
      <LoginDesign/>
      <Spacer height={'20px'}/>
    </div>
  )
}

const ticketMeta = {
  app: 'Web',
  title: 'Make login screen for site',
  desc: TicketDesc,
  branch: 'ftr/8022-make-login-screen',
  status: 'Feature',
  statusColor: 'rgb(238, 0, 254)'
}

function Badge({ txt, color }) {
  return (
    <div style={{display: 'flex', marginRight:'auto', gap: '8px'}}>
      <div style={{display:'flex', background: color, height:'fit-content', borderRadius: '4px', padding: '3px 4px 3px 4px'}}>
        <p style={{color:'white', fontSize: '14px', margin: 0}}>{txt}</p>
      </div>
    </div>
  )
}

// function Loading() {
//   return (
//     <div>
//       <p style={{color: 'white'}}>Loading...</p>
//     </div>
//   )
// }

function Ticket({ meta }) {
  const ticketStyle = {
    height: 'fit-content',
    width: 'fit-content',
    maxWidth: '350px',
    padding: '20px 20px 10px 20px',
    border: '1px solid rgb(100,100,100)', 
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }

  return (
    <div style={ticketStyle}>
      <div style={{display:'flex', marginRight: 'auto', alignItems: 'center'}}>
        <div style={{display: 'flex', marginRight: 'auto', alignItems: 'center', gap: '8px', paddingBottom:'10px'}}>
          <Badge txt={meta.app} color={'rgb(50,50,50)'}/>
          <b style={{color:'white', fontSize: '14px'}}>{meta.title}</b>
        </div>
        <div style={{paddingLeft: '50px', marginBottom: '8px'}}>
          <Badge txt={meta.status} color={meta.statusColor}/>
        </div>
      </div>
      <div style={{display:'flex', marginRight: 'auto'}}>
        {meta.desc()}
      </div>
      <div style={{display:'flex', marginRight: 'auto', alignItems: 'center', gap: '8px'}}>
        <div style={{background: 'rgb(50,50,50)', borderRadius: '4px', padding: '3px 3px 1px 3px'}}>
          <i className='fa fa-code-branch' style={{color:'white', fontSize: '14px'}}></i>
        </div>
        <pre style={{color:'white', fontSize: '12px'}}>{meta.branch}</pre>
      </div>
    </div>
  )
}

function TicketDiv() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', gap: '25px', paddingTop:'50px'}}>
      <Ticket meta={ticketMeta}/>
      <TicketBenefits/>
    </div>
  )
}

const sections = [
  {left: IntroDiv, right: AnimDiv},
  {left: TicketDiv, right: SurveyDiv},
]



function SurveyDiv() {
  function Asterisk() {
    return <p style={{color: 'rgb(110,110,110)', fontSize: '12px'}}>*</p>
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
        <p style={{color: 'rgb(220,220,220)', fontSize: '24px'}}>We surveyed hundreds of software engineers and managers</p>
        <Asterisk/>
      </div>
      <BZList items={[
        {txt: '55% unaware or vaguely unaware of OKRs'},
        {txt: '75% of ticket features unused'},
        {txt: '68% reported purpose by ticket metrics/optics'}
      ]} height={'120px'}/>
      <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
        <Asterisk/>
        <p style={{color: 'rgb(110,110,110)', fontSize: '10px'}}>
          222 engineers and 128 managers from FAANG and startup companies were polled
        </p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div>
      <TabBar/>
      {sections.map((section, i) => {
        return <div key={i} ><Vdiv/><ContentPair left={section.left} right={section.right}/></div>
      })}
      <Vdiv/>
    </div>
  )
}
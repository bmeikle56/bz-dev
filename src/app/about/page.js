
'use client'

import { motion } from 'motion/react'

import { Footer, Pfp, Spacer, TabBar, Vdiv } from '../cmp/Components'

function Anim({ margin, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0,1,0] }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 10
      }}
    >
      <div style={{
        position: 'absolute',
        margin: margin,
        zIndex: 2,
        width: '1px', 
        height: '70px',
        background: 'linear-gradient(rgb(0,0,0), rgb(238, 0, 254), rgb(0,0,0))'
      }}></div>
    </motion.div>
  )
}

function About() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    style={{
      display: 'flex', 
      padding: '0 25vw 0 25vw', 
      flexDirection: 'column', 
      alignItems: 'center', 
      paddingTop: '80px'
    }}>
      <div style={{display: 'flex', paddingBottom: '80px'}}>
        <Pfp meta={{imgLink: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg', radius: 80, alt: 'Author picture'}}/>
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            paddingLeft: '25px', gap: '8px'
          }}>
          <p style={{fontSize: '16px', color:'white', margin:0}}>Braeden Meikle</p>
          <span style={{
            margin:0, 
            fontSize: '12px', 
            color: 'rgb(140,140,140)'
          }}>CEO & Founder of<p style={{display:'inline', paddingLeft: '5px'}} className='bz-txt'>Berzerk</p></span>
          <p style={{margin: 0, color: 'rgb(90,90,90)', fontSize: '12px'}}>December 21st, 2024</p>
        </div>
      </div>
      <span className='txt' style={{lineHeight: 1.5}}>
        After graduating college in December 2023, I began work as a software engineer the
        following month, excited to enter the field. Amidst a year of waning job security and 
        increased attention on the tech sector spurred by the inevitable progression of 
        artificial intelligence models, I found myself frequently questioning legacy, 
        long-standing practices at my company.
        <br></br><br></br><br></br>
        I have been accustomed to certain conventions in projects and classes during college,
        but as I gained power and newfound goals, I allowed my inner thoughts to surface.
        As the frequency with which you encounter a friction point increases, your tolerance
        for this friction point and drive to resolve this friction point exponentially increase.
        <br></br><br></br><br></br>
        The media's incessant and obsessive reporting on artificial intelligence
        foments an unhealthy tech sector culture: we question everything as we always knew it.
        It is nearly impossible to navigate through a news app or site, watch television,
        or browse the web without being bombarded by some campaign of artificial intelligence.
        <br></br><br></br><br></br>
        The narrative is objectively bad, but one benefit is this culture is a catalyst for
        accelerated change. Much like the pandemic, artificial intelligence has 
        <br></br><br></br><br></br>
        The ubiquitous nature of technology increasingly impacts all sectors of work, and as
        time progresses, all sectors increasingly become intertwined with the latest
        software innovations. 
        <br></br><br></br><br></br>
        By swapping text for visualization and embracing a minimalist, lazy mindset, Berzerk
        was born.
        <br></br><br></br><br></br>
        At <p style={{display:'inline'}} className='bz-txt'>Berzerk</p>, we embrace modern over
        legacy, change over certainty, and purpose over process. That's our winning formula
        for prolonged, adaptive success.
      </span>
      <Spacer height={'100px'}/>
    </motion.div>
  )
}



export default function AboutPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TabBar/>
      <Vdiv/>
      <Anim margin={'10vh 0 0 10vw'} delay={4}/>
      <Anim margin={'50vh 0 0 85vw'} delay={10}/>
      <Anim margin={'90vh 0 0 6vw'} delay={23}/>
      <About/>
      <Vdiv/>
      <Footer/>
    </div>
  )
}

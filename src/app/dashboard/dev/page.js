
'use client'

import { useState } from 'react'

import { CBList, SideBar, Spacer, Ticket } from '../../components/Components'

function Desc() {
  return (<div></div>)
}

function FrictionPointDiv() {
  function Circle({ dx, dy, color }) {
    return <div style={{
      position: 'absolute',
      zIndex: 2,
      width: '6px', 
      height: '6px', 
      background: color, 
      borderRadius: '50%',
      transform: `translate(${dx}px,${dy}px)`
    }}/>
  }

  function Line({ dx, dy, theta, width }) {
    return <div style={{
      position: 'absolute',
      zIndex: 0,
      width: `${width}px`, 
      background: 'rgb(75,75,75)', 
      height: '1px',
      transform: `translate(${dx}px,${dy}px) rotate(${theta}deg)`
    }}/>
  }

  function OldFrictionPoints() {
    const color = 'rgb(180,180,180)'
  
    return (
      <div>
        <Circle dx={0} dy={-1} color={color}/>
        <Line dx={-14} dy={8} theta={-45} width={20}/>
        <Circle dx={12} dy={8} color={color}/>
        <Line dx={4} dy={6} theta={42} width={10}/>
        <Circle dx={3} dy={20} color={color}/>
        <Line dx={4} dy={15} theta={-52} width={15}/>
        <Circle dx={-14} dy={12} color={color}/>
        <Line dx={8} dy={21} theta={-8} width={11}/>
        <Circle dx={16} dy={18} color={color}/>
        <Line dx={21} dy={17} theta={-18} width={16}/>
        <Circle dx={34} dy={12} color={color}/>
      </div>
    )
  }
  
  function NewFrictionPoints() {
    const color = 'rgb(238, 0, 254)'
  
    return (
      <div>
        <Circle dx={-14} dy={6} color={color}/>
        <Line dx={-10} dy={8.5} theta={0} width={20}/>
        <Circle dx={10} dy={6} color={color}/>
        <Line dx={15} dy={8.5} theta={0} width={20}/>
        <Circle dx={34} dy={6} color={color}/>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex', 
      // gap: '60px', 
      justifyContent: 'center', 
      flexDirection: 'column',
      paddingBottom: '20px',
      textAlign: 'left'
    }}>
      <p style={{color: 'rgb(220,220,220)', fontSize: 14}}>
        Make a side-by-side comparison of old agile vs Berzerk.
        <br></br>
        Add a caption for both and make it convincing!
      </p>
      <div style={{
        display: 'flex', 
        gap: '60px', 
        height: '150px',
        justifyContent: 'center', 
        flexDirection: 'column',
        marginLeft: '155px',
        marginTop: '-40px',
        paddingTop: '10px'
      }}>
      <OldFrictionPoints/>
      <NewFrictionPoints/>
      </div>
      <CBList txt={'Golden image & unit tests'}/>
      <CBList txt={'Code merged + pipeline succeeded'}/>
    </div>
  )
}

function LoginTicketDesc() {
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
        <Spacer height={'15px'}/>
        <b style={{color: 'rgb(238, 0, 254)', textShadow: '0px 0px 12px rgb(222, 218, 218)', fontSize: '20px', marginBottom:8}}>Berzerk</b>
        <Decoration/>
        <Spacer height={'10px'}/>
        <LoginField txt={'Email'}/>
        <Spacer height={'5px'}/>
        <LoginField txt={'Secure password'}/>
        <Spacer height={'5px'}/>
        <div style={{
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
        </div>
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

const ticketMeta1 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Ad Visualization',
  desc: FrictionPointDiv,
  branch: 'ftr/713-make-friction-anim',
  status: 'Feature',
  statusColor: 'rgb(108, 0, 124)'
}

const ticketMeta2 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Barrel file for components',
  desc: Desc,
  branch: 'ftr/101-add-barrel-file',
  status: 'Refactor',
  statusColor: 'rgb(156, 86, 0)'
}

const ticketMeta3 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Express Backend',
  desc: Desc,
  branch: 'ftr/713-init-backend',
  status: 'Research',
  statusColor: 'rgb(0, 109, 0)'
}

export default function DevDashboardPage() {
  const [selected, select]= useState(0)

  return (
    <div style={{
      zIndex: 0,
      height: '100vh', 
      display: 'flex',
      gap: '30px',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* <SideBar tabs={[
        {txt: 'One', action: () => {console.log('one!')}},
        {txt: 'Two', action: () => {console.log('two!')}},
        {txt: 'Three', action: () => {console.log('three!')}},
        {txt: 'Four', action: () => {console.log('four!')}},
        {txt: 'Five', action: () => {console.log('five!')}},
      ]}/> */}
      <Ticket meta={ticketMeta1} isToggled={selected == 0} isMerging={false} onClick={() => select(0)}/>
      <Ticket meta={ticketMeta2} isToggled={selected == 1} isMerging={true} onClick={() => select(1)}/>
      <Ticket meta={ticketMeta3} isToggled={selected == 2} isMerging={false} onClick={() => select(2)}/>
    </div>
  )
}
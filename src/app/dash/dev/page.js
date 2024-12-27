
'use client'

import { useState } from 'react'

import { CBList, ccode, CCode, Goal, SideBar, Spacer, Work } from '../../cmp/Components'


function BarrelDesc() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'start',
    }}>
      <p style={{color: 'rgb(220,220,220)', fontSize: 14}}>
        The file structure should be (in alphabetical order)
      </p>
      <div style={{display: 'block'}}>
        <CCode txt={'import'} color={ccode.reserved}/>
        <CCode txt={' { '} color={ccode.yellow}/>
        <CCode txt={'Component'} color={ccode.lightblue}/>
        <CCode txt={' } '} color={ccode.yellow}/>
        <CCode txt={'from'} color={ccode.reserved}/>
        <CCode txt={` './impl/Component' `} color={ccode.salmon}/>
        <Spacer height={6}/>
        <CCode txt={'// ...'} color={ccode.green}/>
        <Spacer height={20}/>
        <CCode txt={'export'} color={ccode.reserved}/>
        <CCode txt={' { '} color={ccode.yellow}/>
        <Spacer height={6}/>
        <CCode txt={'  Component'} color={ccode.lightyellow}/>
        <Spacer height={6}/>
        <CCode txt={'  // ...'} color={ccode.green}/>
        <Spacer height={6}/>
        <CCode txt={'} '} color={ccode.yellow}/>
      </div>
      <p style={{color: 'rgb(220,220,220)', fontSize: 14}}>
        All files can import necessary components from this 
        barrel file rather than import each component 
        individually
      </p>
      <div style={{display: 'block'}}>
        <CCode txt={'import'} color={ccode.reserved}/>
        <CCode txt={' { '} color={ccode.yellow}/>
        <CCode txt={'a'} color={ccode.lightblue}/>
        <CCode txt={', '} color={ccode.white}/>
        <CCode txt={'b'} color={ccode.lightblue}/>
        <CCode txt={', '} color={ccode.white}/>
        <CCode txt={'c'} color={ccode.lightblue}/>
        <CCode txt={' } '} color={ccode.yellow}/>
        <CCode txt={'from'} color={ccode.reserved}/>
        <CCode txt={` './components/Components' `} color={ccode.salmon}/>
        <Spacer height={6}/>
      </div>
    </div>
  )
}

function BackendDesc() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'start',
      paddingBottom: '8px'
    }}>
      <p style={{color: 'rgb(220,220,220)', fontSize: 14}}>
        The backend should have core account APIs in Express
      </p>
      <div style={{display: 'block'}}>
        <CCode txt={'// config server...'} color={ccode.green}/>
        <Spacer height={20}/>
        <CCode txt={'// make sure to properly document API'} color={ccode.green}/>
        <Spacer height={6}/>
        <CCode txt={'server'} color={ccode.lightblue}/>
        <CCode txt={'.'} color={ccode.white}/>
        <CCode txt={'post'} color={ccode.lightyellow}/>
        <CCode txt={'('} color={ccode.yellow}/>
        <CCode txt={`'/login'`} color={ccode.salmon}/>
        <CCode txt={', '} color={ccode.white}/>
        <CCode txt={'('} color={ccode.reserved}/>
        <CCode txt={'req'} color={ccode.lightblue}/>
        <CCode txt={', '} color={ccode.white}/>
        <CCode txt={'res'} color={ccode.lightblue}/>
        <CCode txt={')'} color={ccode.reserved}/>
        <CCode txt={' => '} color={ccode.darkblue}/>
        <CCode txt={'{'} color={ccode.reserved}/>
        <Spacer height={6}/>
        <CCode txt={'  // login with values in URL params'} color={ccode.green}/>
        <Spacer height={6}/>
        <CCode txt={'  // update db'} color={ccode.green}/>
        <Spacer height={6}/>
        <CCode txt={'}'} color={ccode.reserved}/>
        <Spacer height={20}/>



        <CCode txt={'server'} color={ccode.lightblue}/>
        <CCode txt={'.'} color={ccode.white}/>
        <CCode txt={'post'} color={ccode.lightyellow}/>
        <CCode txt={'('} color={ccode.yellow}/>
        <CCode txt={`'/deleteAccount'`} color={ccode.salmon}/>
        <CCode txt={', '} color={ccode.white}/>
        <CCode txt={'('} color={ccode.reserved}/>
        <CCode txt={'req'} color={ccode.lightblue}/>
        <CCode txt={', '} color={ccode.white}/>
        <CCode txt={'res'} color={ccode.lightblue}/>
        <CCode txt={')'} color={ccode.reserved}/>
        <CCode txt={' => '} color={ccode.darkblue}/>
        <CCode txt={'{'} color={ccode.reserved}/>
        <Spacer height={6}/>
        <CCode txt={'  // delete account!'} color={ccode.green}/>
        <Spacer height={6}/>
        <CCode txt={'}'} color={ccode.reserved}/>
      </div>
      <Spacer height={10}/>
      <CBList txt={'Unit tests'}/>
      <CBList txt={'Environment config'}/>
      <CBList txt={'Encrypted'}/>
      <CBList txt={'Deployed to server'}/>
    </div>
  )
}

function FrictionPointDesc() {
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
      justifyContent: 'center', 
      flexDirection: 'column',
      paddingBottom: '10px',
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
        height: '140px',
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

/// Feature = ftr
/// Refactor = ref
/// Research = rsc

const workMeta1 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Visualization Marketing',
  desc: FrictionPointDesc,
  branch: 'ftr/713-make-friction-anim',
  status: 'Feature',
  statusColor: 'rgb(108, 0, 124)'
}

const workMeta2 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Backend Account APIs',
  desc: BackendDesc,
  branch: 'rsc/713-account-apis',
  status: 'Research',
  statusColor: 'rgb(0, 109, 0)'
}

const workMeta3 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Barrel file for components',
  desc: BarrelDesc,
  branch: 'ftr/101-add-barrel-file',
  status: 'Refactor',
  statusColor: 'rgb(156, 86, 0)'
}

const goalMeta1 = {
  title: 'Improve Advertisement + Marketing',
  criteria: [
    {txt: 'Bullet 1'},
    {txt: 'Bullet 2'},
    {txt: 'Bullet 3'}
  ],
  deadline: 'March 2025'
}

const goalMeta2 = {
  title: 'Complete Web App MVP',
  criteria: [
    {txt: 'Bullet 1'}
  ],
  deadline: 'March 2025'
}

const goalMeta3 = {
  title: 'Prepare for Scale',
  criteria: [
    {txt: 'Bullet 1'}
  ],
  deadline: 'March 2025'
}

export default function DevDashboardPage() {
  const [selected, select]= useState(0)

  function Connect({ port1, port2, isToggled }) {
    return (
      <svg>
        <path style={{
          color: isToggled ? 'rgb(120,120,120)' : 'rgb(50,50,50)'
        }} d={`M${port1.x} ${port1.y} L${port2.x} ${port2.y}`}/>
      </svg>
    )
  }

  return (
    <div style={{
      zIndex: 0,
      height: '100vh', 
      rowGap: '150px',
      display: 'grid',
      alignItems: 'start',
      justifyItems: 'center', // center items horizontally
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: 'repeat(3, auto)',
      padding: 80
    }}>
      {/* <SideBar tabs={[
        {txt: 'One', action: () => {console.log('one!')}},
        {txt: 'Two', action: () => {console.log('two!')}},
        {txt: 'Three', action: () => {console.log('three!')}},
        {txt: 'Four', action: () => {console.log('four!')}},
        {txt: 'Five', action: () => {console.log('five!')}},
      ]}/> */}
      <Goal meta={goalMeta1} isToggled={selected == -3} isMerging={false} onClick={() => select(-3)}/>
      <Goal meta={goalMeta2} isToggled={selected == -2} isMerging={false} onClick={() => select(-2)}/>
      <Goal meta={goalMeta3} isToggled={selected == -1} isMerging={false} onClick={() => select(-1)}/>
      <Work meta={workMeta1} isToggled={selected == 0} isMerging={false} onClick={() => select(0)}/>
      <Work meta={workMeta2} isToggled={selected == 1} isMerging={true} onClick={() => select(1)}/>
      <Work meta={workMeta3} isToggled={selected == 2} isMerging={false} onClick={() => select(2)}/>
    </div>
  )
}
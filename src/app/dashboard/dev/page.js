
'use client'

import { useState } from 'react'

import { SideBar, Ticket } from '../../components/Components'

function Desc() {
  return (<div></div>)
}

const ticketMeta1 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Make login screen for site',
  desc: Desc,
  branch: 'ftr/8022-make-login-screen',
  status: 'Feature',
  statusColor: 'rgb(238, 0, 254)'
}

const ticketMeta2 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Add barrel file for components',
  desc: Desc,
  branch: 'ftr/101-add-barrel-file',
  status: 'Refactor',
  statusColor: 'rgb(254, 140, 0)'
}

const ticketMeta3 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Make friction animation',
  desc: Desc,
  branch: 'ftr/713-make-friction-anim',
  status: 'Feature',
  statusColor: 'rgb(238, 0, 254)'
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
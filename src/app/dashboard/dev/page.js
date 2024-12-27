
'use client'

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
  title: 'Make login screen for site',
  desc: Desc,
  branch: 'ftr/8022-make-login-screen',
  status: 'Feature',
  statusColor: 'rgb(238, 0, 254)'
}

const ticketMeta3 = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Make login screen for site',
  desc: Desc,
  branch: 'ftr/8022-make-login-screen',
  status: 'Feature',
  statusColor: 'rgb(238, 0, 254)'
}

export default function DevDashboardPage() {
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
      <Ticket meta={ticketMeta1} isToggled={true} isMerging={false}/>
      <Ticket meta={ticketMeta2} isToggled={false} isMerging={true}/>
      <Ticket meta={ticketMeta3} isToggled={false} isMerging={false}/>
    </div>
  )
}
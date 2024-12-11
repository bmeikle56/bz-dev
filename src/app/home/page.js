
'use client'

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

function ColumnPair({ left, right }) {
  return (
    <div className='column-pair'>
      {[left, right].map((k, i) => {
        return <div key={i} className='column'>
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
  {left: Title, right: Title},
  {left: Title, right: Title},
  {left: Title, right: Title},
]

export default function HomePage() {
  return (
    <div>
      <TabBar tabs={tabs}/>
      <Vdiv/>
      {sections.map((section, i) => {
        return <ColumnPair key={i} left={section.left} right={section.right}/>
      })}
    </div>
  )
}
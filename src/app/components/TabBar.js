
'use client'

import { useRouter } from 'next/navigation'
import { toggleLogin } from '../auth/page'

function TabBar() {
  const router = useRouter()

  const tabs = [
    {txt: 'Why Berzerk', action: () => { router.push('/home') }},
    {txt: 'Who we are',  action: () => { router.push('/about') }},
    {txt: 'Log in',      action: () => { router.push('/auth'); toggleLogin(true) }},
    {txt: 'Sign up',     action: () => { router.push('/auth'); toggleLogin(false) }},
    {txt: 'Pricing',     action: () => { router.push('/pricing') }},
  ]

  return (
    <div style={{display: 'flex', width: 'fit-content', margin:'auto', paddingBottom: '10px', paddingTop: '5px'}}>
      {tabs.map((tab, i) => {
        return <div key={i} style={{display: 'flex', justifyContent: 'space-between'}}>
          <button className='tab-btn' onClick={tab.action}>
            <p className='tab'>{tab.txt}</p>
          </button>
          {i < tabs.length-1 ? <div style={{
            height: '40px',
            width: '1px',
            backgroundClip: 'content-box',
            margin: '0 80px 0 80px',
            background: 'linear-gradient(rgb(20,20,20), rgb(70,70,70), rgb(20,20,20))'
          }}/> : null}
        </div>
      })}
    </div>
  )
}

export { TabBar }
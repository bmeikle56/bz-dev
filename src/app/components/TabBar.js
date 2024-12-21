
'use client'

import { useRouter } from 'next/navigation'

function TabBar() {
  const router = useRouter()

  const tabs = [
    {txt: 'Why Berzerk', action: () => { router.push('/home') }},
    {txt: 'Who we are', action: () => { router.push('/about') }},
    {txt: 'Log in', action: () => { router.push('/auth') }},
    {txt: 'Sign up', action: () => { router.push('/auth') }},
    {txt: 'Pricing', action: () => {console.log('tap!')}},
  ]

  return (
    <div id='tabbar'>
      {tabs.map((tab, i) => {
        return <button key={i} className='tab-btn' onClick={tab.action}>
          <p className='tab'>{tab.txt}</p>
        </button>
      })}
    </div>
  )
}

export { TabBar }
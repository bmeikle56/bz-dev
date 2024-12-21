
'use client'

import { Spacer } from '../components/Spacer'
import { useRouter } from 'next/navigation'

function BackBtn() {
  const router = useRouter()

  function onClickHome() {
    router.push('/home')
  }

  return (
    <div style={{
      position: 'absolute',
      zIndex: '2',
      margin: '3vh 0 0 2vw',
    }}>
      <button className='tab-btn' onClick={onClickHome}>
        <span className='tab'>&lArr; Home</span>
      </button>
    </div>
  )
}

function LoginField({ txt }) {
  return (
    <div>
      <input type='text' style={{opacity: 0}}></input>
      <div style={{border: '1px solid rgb(26,26,26)', height: '37px', width: '240px', borderRadius: '8px'}}>
        <p style={{color:'rgb(60,60,60)', position: 'absolute', margin: '10px 0 0 8px', fontSize: '14px'}}>{txt}</p>
      </div>
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
        fontSize: '12px',
        color: 'rgb(160,160,160)', 
        textShadow: '0px 0px 15px rgb(46, 190, 238), 0px 0px 12px rgb(46, 190, 238), 0px 0px 15px rgb(46, 190, 238)'
      }}>
        {JSON.stringify(json, null, 2)}
      </pre>
    </div>
  )
}

function SignUp() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Spacer height={'5px'}/>
      <p style={{
        color: 'rgb(238, 0, 254)', 
        textShadow: '0px 0px 20px rgb(222, 218, 218)', 
        fontSize: '44px', 
        marginBottom: 30,
        marginTop: '21vh'
      }}>Berzerk</p>
      <Decoration/>
      <Spacer height={'25px'}/>
      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
        <p style={{
          fontSize: '12px',
          color: 'rgb(150,150,150)',
          margin: 0
        }}>Enter a valid email</p>
        <LoginField txt={'Email'}/>
        <p style={{
          fontSize: '12px',
          color: 'rgb(150,150,150)',
          paddingTop: 18,
          margin: 0
        }}>Enter a secure password</p>
        <LoginField txt={'Secure password'}/>
        <LoginField txt={'Re-enter password'}/>
      </div>
      <Spacer height={'40px'}/>
    </div>
  )
}

function Login() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Spacer height={'5px'}/>
      <p style={{
        color: 'rgb(238, 0, 254)', 
        textShadow: '0px 0px 20px rgb(222, 218, 218)', 
        fontSize: '44px', 
        marginBottom: 30,
        marginTop: '21vh'
      }}>Berzerk</p>
      <Decoration/>
      <Spacer height={'25px'}/>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
        <LoginField txt={'Email'}/>
        <LoginField txt={'Secure password'}/>
      </div>
      <Spacer height={'18px'}/>
      <button style={{
        border: 'none',
        background:'rgb(238, 0, 254)', 
        width: '240px',
        height: '37px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <b style={{color: 'rgb(220,220,220)', fontSize: '14px'}}>Log in</b>
      </button>
      <Spacer height={'18px'}/>
      <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
        <p style={{color: 'rgb(220,220,220)', fontSize: '13px'}}>Don't have an account?</p>
        <b style={{color: 'rgb(238, 0, 254)', fontSize: '13px', textShadow: '0px 0px 8px rgb(192, 191, 191)'}}>Create one</b>
      </div>
    </div>
  )
}

export default function AuthPage() {
  return (
    <div>
      <BackBtn/>
      <Login/>
      {/* <SignUp/> */}
    </div>
  )
}

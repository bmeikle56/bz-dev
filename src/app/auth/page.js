
'use client'

import { motion } from 'motion/react'
import { Spacer } from '../components/Spacer'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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

function LoginSignupBtn({ txt, onClick }) {
  return (
    <button style={{
      border: 'none',
      background:'rgb(238, 0, 254)', 
      width: '240px',
      height: '37px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    onClick={onClick}
    >
      <b style={{color: 'rgb(220,220,220)', fontSize: '14px'}}>{txt}</b>
    </button>
  )
}

function Title() {
  return (
    <b style={{
      color: 'rgb(238, 0, 254)', 
      textShadow: '0px 0px 20px rgb(222, 218, 218)', 
      fontSize: '44px', 
      marginBottom: 30,
      marginTop: '21vh'
    }}>Berzerk</b>
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

function SignUp({ setState }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Spacer height={'5px'}/>
      <Title/>
      <Decoration/>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1
      }}
      >
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
        <Spacer height={'18px'}/>
        <LoginSignupBtn onClick={() => {console.log('sign up')}} txt={'Sign up'}/>
        <Spacer height={'5px'}/>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <p style={{color: 'rgb(220,220,220)', fontSize: '13px'}}>Have an account?</p>
          <button onClick={() => setState(true)} style={{padding: '0 0 0 4px', border: 'none', background: 'none', cursor: 'pointer'}}>
            <b style={{color: 'rgb(238, 0, 254)', fontSize: '13px', textShadow: '0px 0px 8px rgb(192, 191, 191)'}}>Login</b>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function Login({ setState }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Spacer height={'5px'}/>
      <Title/>
      <Decoration/>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1
      }}
      >
        <Spacer height={'25px'}/>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
          <LoginField txt={'Email'}/>
          <LoginField txt={'Secure password'}/>
        </div>
        <Spacer height={'18px'}/>
        <LoginSignupBtn onClick={() => {console.log('login')}} txt={'Login'}/>
        <Spacer height={'10px'}/>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <p style={{color: 'rgb(220,220,220)', fontSize: '13px'}}>Don't have an account?</p>
          <button onClick={() => setState(false)} style={{padding: '0 0 0 4px', border: 'none', background: 'none', cursor: 'pointer'}}>
            <b style={{color: 'rgb(238, 0, 254)', fontSize: '13px', textShadow: '0px 0px 8px rgb(192, 191, 191)'}}>Create one</b>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

/// Exported function to allow tab bar to properly display login/signup
let showLogin = true
function toggleLogin(val) { showLogin = val }
export { toggleLogin }

export default function AuthPage() {
  const [isLogin, setLogin] = useState(showLogin)

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.1
    }}
    >
      <BackBtn/>
      {isLogin ? <Login setState={setLogin}/> : <SignUp setState={setLogin}/>}
    </motion.div>
  )
}

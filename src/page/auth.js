import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spacer } from '../cmp/Components'

function BackBtn() {
  const navigate = useNavigate()

  return (
    <div style={{
      position: 'absolute',
      zIndex: '2',
      margin: '3vh 0 0 2vw',
    }}>
      <button className='tab-btn' onClick={() => navigate('/')}>
        <span className='tab'>&lArr; Home</span>
      </button>
    </div>
  )
}

function LoginField({ placeholder, onChange, isSecure }) {
  return (
    <div>
      <input 
      type={isSecure ? 'password' : 'text'}
      placeholder={placeholder} 
      id={`${placeholder}-txt-field`} 
      onChange={onChange}
      style={{
        background: 'none',
        width: '224px',
        position: 'absolute',
        color:'rgb(120,120,120)', 
        margin: '10px 0 0 8px', 
        fontSize: '14px'
      }}/>
      <div style={{border: '1px solid rgb(26,26,26)', height: '37px', width: '240px', borderRadius: '8px'}}/>
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
  const [email, setEmail] = useState(null)
  const [pwd, setPwd] = useState(null)
  const [pwdAgain, setPwdAgain] = useState(null)

  function printCredentials() {
    console.log(email)
    console.log(pwd)
    console.log(pwdAgain)
  }
  
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
          <Spacer height={'18px'}/>
          <LoginField 
            placeholder={'Email'}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p style={{
            fontSize: '12px',
            color: 'rgb(150,150,150)',
            paddingTop: 18,
            margin: 0
          }}>Enter a secure password</p>
          <Spacer height={'18px'}/>
          <LoginField 
            placeholder={'Secure password'}
            onChange={(event) => setPwd(event.target.value)}
            isSecure={true}
          />
          <Spacer height={'18px'}/>
          <LoginField 
            placeholder={'Re-enter password'} 
            onChange={(event) => setPwdAgain(event.target.value)}
            isSecure={true}
          />
        </div>
        <Spacer height={'18px'}/>
        <LoginSignupBtn onClick={() => {printCredentials()}} txt={'Sign up'}/>
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
  const [email, setEmail] = useState(null)
  const [pwd, setPwd] = useState(null)

  function printCredentials() {
    console.log(email)
    console.log(pwd)
  }

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
        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', justifyContent:'center'}}>
          <LoginField 
            placeholder={'Email'}
            onChange={(event) => setEmail(event.target.value)}
          />
          <LoginField 
            placeholder={'Secure password'}
            onChange={(event) => setPwd(event.target.value)}
            isSecure={true}
          />
        </div>
        <Spacer height={'18px'}/>
        <LoginSignupBtn onClick={() => printCredentials()} txt={'Login'}/>
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

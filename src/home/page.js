import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { BBullet, BZtxt, Inlinetxt, CBList, Footer, Spacer, TabBar, Vdiv, RichWork, ccode, CCode, BZCCode } from '../cmp/Components'

function BZList2({ items, height }) {
  return (
    <div style={{display:'flex', flexDirection: 'column', height: height}}>
      {items.map((item, i) => {
        return <div key={i} style={{display:'flex', flexGrow: 1, alignItems:'center', gap:'8px'}}>
          <p style={{margin: 0, color: 'rgb(238, 0, 254)'}}>&diams;</p>
          <p style={{margin: 0, color: 'rgb(220,220,220)'}}>{item.txt}</p>
        </div>
      })}
    </div>
  )
}

function Circle({ color }) {
  return (
    <div style={{borderRadius: '50%', background: color, width: 11, height: 11}}/>
  )
}

function IntroDiv() {
  return (
    <div id='intro'>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 80}}>
        <Title/>
        <div style={{display: 'flex', width: 'fit-content', height: 'fit-content', flexDirection: 'column', alignItems: 'center', padding: 20, gap: 40}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex'}}>
              <BZtxt txt={'Fast'}/>
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0,1] }}
              transition={{ 
                duration: 1, 
                delay: 3,
                repeatDelay: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              >
                <Inlinetxt txt={'processes and no legacy'} marginLeft={8} color={'rgb(180,180,180)'}/>
              </motion.div>
            </div>
            <div style={{display: 'flex'}}>
              <BZtxt txt={'Command line software'}/>
            </div>
            <div style={{display: 'flex'}}>
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0,1] }}
              transition={{ 
                duration: 1, 
                delay: 3,
                repeatDelay: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}>
                <Inlinetxt txt={'Built by devs, '} marginRight={8} color={'rgb(180,180,180)'}/>
              </motion.div>
              <BZtxt txt={'for devs'}/>
            </div>
          </div>
          <FrictionPointDiv/>
        </div>
      </div>
      <Spacer height={100}/>
      <div style={{border: '2px solid rgb(25,25,25)', borderRadius: '12px', display:'flex', flexDirection:'column', width: 'fit-content', height: 'fit-content', padding: 20, marginLeft: -50}}>
        <div style={{display: 'flex', gap: 8, alignItems: 'center', justifyContent:'center', width: '100%'}}>
          <div style={{display: 'flex', marginRight: 'auto', gap: 6}}>
            <Circle color={'rgba(255,0,0,0.4)'}/>
            <Circle color={'rgba(255,255,0,0.4)'}/>
            <Circle color={'rgba(0,255,0,0.4)'}/>
          </div>
          <div style={{display: 'flex', marginRight: 'auto', alignItems: 'center', gap: 6}}>
            <FontAwesomeIcon icon={faFolder} style={{ color: 'rgb(238, 0, 254)' }} />
            <Inlinetxt txt={'berzerk-dev'} color={'rgb(60,60,60)'}/>
          </div>
          
        </div>
        <Spacer height={16}/>
        <div style={{background: 'rgb(25,25,25)', height: 2, width: '100%'}}/>
        <Spacer height={10}/>
        <CCode txt={'# make a ticket'} color={ccode.green}/>
        <BZCCode txt={'bz make --repo=bz-dev --id=launch-site --notes="purchase domain, forward DNS"'}/>
        <Spacer height={16}/>
        <CCode txt={'# work on a ticket'} color={ccode.green}/>
        <BZCCode txt={'bz workon --repo=bz-dev --id=launch-site'}/>
        <Spacer height={16}/>
        <CCode txt={'# submit a PR'} color={ccode.green}/>
        <BZCCode txt={'bz submit'}/>
        <Spacer height={16}/>
        <CCode txt={'# delete a ticket'} color={ccode.green}/>
        <BZCCode txt={'bz delete --repo=bz-dev --id=launch-site'}/>
        <Spacer height={16}/>
        <CCode txt={'# update me on my tickets'} color={ccode.green}/>
        <BZCCode txt={'bz updateme'}/>
      </div>
    </div>
  )
}

function Title() {
  return (
    <div>
      <p id='title'>Berzerk</p>
    </div>
  )
}

function ContentPair({ left, right }) {
  return (
    <div className='content-pair'>
      {[left, right].map((k, i) => {
        return <div key={i} className='content'>
          {k()}
        </div>
      })}
    </div>
  )
}

function WorkBenefits() {
  return (
    <div>
      <BZList2 items={[
        {txt: 'Only the data that matters'},
        {txt: 'Seamlessly linked branches'},
        {txt: 'Optimized development'},
        {txt: 'Elegant modern design'},
      ]} height={'120px'}/>
    </div>
  )
}

function WorkDesc() {
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
        <div style={{display: 'flex', textAlign: 'left'}}>
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
      <BBullet txt={'email'} color={'rgb(220,220,220)'}/>
      <Spacer height={'3px'}/>
      <BBullet txt={'secure password'} color={'rgb(220,220,220)'}/>
      <Spacer height={'5px'}/>
      <LoginDesign/>
      <Spacer height={'20px'}/>
    </div>
  )
}

const workMeta = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Make login screen for site',
  desc: WorkDesc,
  branch: 'ftr/8022-make-login-screen',
  status: 'Feature',
  statusColor: 'rgb(238, 0, 254)'
}

function WorkDiv() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', gap: '25px', paddingTop:'50px'}}>
      <RichWork meta={workMeta} status={'active'}/>
      <WorkBenefits/>
    </div>
  )
}

const sections = [
  {left: IntroDiv, right: WorkDiv},
]

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
    <div style={{display: 'flex', gap: '40px', flexDirection: 'column'}}>
      <div style={{display: 'flex'}}>
        <OldFrictionPoints/>
        <p style={{color:'white', position: 'absolute', marginLeft: '60px', marginTop: '5px'}}>
          Legacy software development
        </p>
      </div>
      <div style={{display: 'flex', width: '280px'}}>
        <NewFrictionPoints/>
        <b style={{display: 'inline', marginLeft: '60px', color: 'rgb(238, 0, 254)', textShadow: '0px 0px 10px rgb(222, 218, 218)'}}>Berzerk</b>
        <p style={{color:'white', position: 'absolute', marginLeft: '124px', marginTop: '0px'}}>
          software development
        </p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    >
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <TabBar/>
      </div>
      <Vdiv/>
      {sections.map((section, i) => {
        return <div key={i} ><ContentPair left={section.left} right={section.right}/><Vdiv/></div>
      })}
      <Footer/>
    </motion.div>
  )
}
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { TabBar } from '../cmp/Components'
import { Spacer } from '../cmp/Components'

function DownloadCLI() {
  return (
    <div
      style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '50vh'}}
      >
        <FontAwesomeIcon icon={faFolder}
        style={{
          color: 'rgb(238, 0, 254)',
          width: 80,
          height: 80,
        }}/>
        <a href='/files/bz-dev.zip' download style={{ textDecoration: 'none' }}>
          <pre style={{ color: 'rgb(238, 0, 254)' }}>bz-dev</pre>
        </a>
      </div>
  )
}

function RepoStructure() {

  function Repo({ txt }) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <FontAwesomeIcon icon={faFolder}
        style={{
          color: 'rgb(238, 0, 254)',
          width: 40,
          height: 40,
        }}/>
        <pre style={{ color: 'rgb(238, 0, 254)' }}>{txt}</pre>
      </div>
    )
  }

  const color = 'rgb(35,35,35)'

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
      height: '30vh',
    }}>
      <Repo txt={'repos'}/>
      <div style={{width: '1.4px', height: '8px', backgroundColor: color}}/>
      <div style={{width: '100px', height: '1.4px', backgroundColor: color}}/>
      <div style={{display: 'flex'}}>
        <div style={{width: '1.4px', height: '8px', backgroundColor: color}}/>
        <div style={{width: '1.4px', height: '8px', backgroundColor: color, marginLeft: 97}}/>
      </div>
      <Spacer height={10}/>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
      }}>
        <Repo txt={'berzerk-dev'}/>
        <Repo txt={'poker-degen'}/>
      </div>
    </div>
  )
}

function DownloadPage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    >
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <TabBar/>
      </div>
      <DownloadCLI/>
      <RepoStructure/>
    </motion.div>
  )
}

export default DownloadPage
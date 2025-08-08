import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

function DownloadPage() {
  return (
    <motion.div
    style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      background: 'black'
    }}
    >
      <FontAwesomeIcon icon={faFolder}
      style={{
        color: 'rgb(238, 0, 254)',
        width: 80,
        height: 80,
      }}/>
      <a href='/files/myscript.zsh' download style={{ textDecoration: 'none' }}>
        <pre style={{ color: 'rgb(238, 0, 254)' }}>Download</pre>
      </a>
    </motion.div>
  )
}

export default DownloadPage
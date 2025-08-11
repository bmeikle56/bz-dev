import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { TabBar } from '../cmp/Components'

function DownloadPage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    >
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <TabBar/>
      </div>
      <div
      style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh'}}
      >
        <FontAwesomeIcon icon={faFolder}
        style={{
          color: 'rgb(238, 0, 254)',
          width: 80,
          height: 80,
        }}/>
        <a href='/files/bz-dev.zip' download style={{ textDecoration: 'none' }}>
          <pre style={{ color: 'rgb(238, 0, 254)' }}>Download</pre>
        </a>
      </div>
    </motion.div>
  )
}

export default DownloadPage
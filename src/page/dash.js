import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Ticket, TabBar, BZtxt } from '../cmp/Components'

function RepoTickets({ error, tickets }) {
  return (
    <div style={{ position: 'relative', zIndex: 1, marginLeft: '-10vw'}}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div id='repo-ticket-container' >
        {tickets.map((ticket, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: index * -10,
              left: index * -10,
              zIndex: index + 1,
              background: 'black',
              borderRadius: 10,
              width: 180,
              cursor: 'pointer',
            }}
          >
            <Ticket
              id={index}
              pfp={'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg'}
              meta={ticket}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function ByteTransfer() {
  return (
    <div
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}
    >
      <pre id='loading' style={{
        color: 'rgb(160,160,160)',
        textShadow: '0px 0px 15px rgb(46, 190, 238), 0px 0px 12px rgb(46, 190, 238), 0px 0px 15px rgb(46, 190, 238)'
      }}></pre>
    </div>
  )
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(null)
  const [empty, setEmpty] = useState(false)

  const animTime = 450 // 0.45 seconds + service transit

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/.netlify/functions/fetchTickets', {
          method: 'POST',
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'failed to fetch tickets')
        } else if (data.repos.length === 0) {
          // we do not have data
          setEmpty(true)
        } else {
          // we have data
          setEmpty(false)
        }

        setTimeout(() => {
          setRepos(data.repos)
          setLoading(false)
        }, animTime)
      } catch (err) {
        setTimeout(() => {
          setError(err.message)
          setLoading(false)
        }, animTime)
      }
    }
    fetchTickets()
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {loading ? (
        <motion.div
          key='loading'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
          }}
        >
          <ByteTransfer/>
        </motion.div>
      ) : (
        <div style={{width: '100%', height: '100%'}}>
          <div className='wallpaper'/>
          <motion.div
          key='content'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TabBar/>
          </motion.div>
        <motion.div
          key='content'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'auto',
              paddingLeft: 0,
              paddingRight: 16,
              zIndex: 1,
              width: '100%',
            }}
          >
          </div>
          <div id='repo-tickets-div' style={{ zIndex: 0, position: 'absolute', width: '100%', height: '80vh', justifyContent: 'space-evenly', alignItems: 'center', display: 'flex'}}>
            {empty && 
              <div style={{background: 'black', padding: '16px 20px 16px 20px', borderRadius: 16, display: 'flex', alignItems: 'center'}}>
                <p style={{color: 'rgb(150,150,150)', paddingRight: 8, margin: 0}}>run</p>
                <BZtxt txt={'bz make'}/>
                <p style={{color: 'rgb(150,150,150)', paddingLeft: 8, margin: 0}}> to get started!</p>
              </div>
            }
            {repos.map((meta) => {
              return <RepoTickets error={error} tickets={meta.tickets}/>
            })}
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

setInterval(() => {
  if (document.getElementById('loading')) {
    document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
  }
}, 80)
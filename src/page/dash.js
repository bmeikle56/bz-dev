import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Ticket, TabBar, Wallpaper } from '../cmp/Components'

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
              repo={ticket.repo}
              dev={ticket.dev}
              tag={ticket.tag}
              pfp={'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg'}
              key={ticket.key}
              notes={ticket.notes}
              status={ticket.status}
              branch={`${ticket.tag}/${ticket.key}`}
              onClick={() => {}}
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
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}
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

  const animTime = 450 // 0.45 seconds + service transit

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          'https://berzerk-agile-dev-backend-production.up.railway.app/fetch',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer gfa273snxxjk918a`,
            },
            body: JSON.stringify({ username: 'braeden' }),
          }
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'failed to fetch tickets')
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
            width: '100vw',
          }}
        >
          <ByteTransfer/>
        </motion.div>
      ) : (
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
            height: '100vh',
            width: '100vw',
          }}
        >
          <Wallpaper/>
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
            <TabBar/>
          </div>
          <div id='repo-tickets-div' style={{ zIndex: 2, position: 'absolute', width: '100vw', height: '80vh', justifyContent: 'space-evenly', alignItems: 'center', display: 'flex'}}>
            {repos.map((meta) => {
              return <RepoTickets error={error} tickets={meta.tickets}/>
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

setInterval(() => {
  if (document.getElementById('loading')) {
    document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
  }
}, 80)
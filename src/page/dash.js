import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Ticket, TabBar } from '../cmp/Components'

function TicketList({ error, tickets }) {
  return (
    <div style={{position: 'absolute', zIndex: 1}}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tickets.map((ticket, index) => (
        <div key={index} 
        style={{background: 'black', borderRadius: 10, position: 'absolute', zIndex: index + 1, marginTop: index * -45, marginLeft: index * -45}}
        >
          <Ticket 
          id={index} 
          repo={ticket.repo}
          dev={ticket.dev}
          tag={ticket.tag}
          pfp={'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg'}
          title={ticket.title}
          notes={ticket.notes}
          status={ticket.status}
          branch={`${ticket.tag}/${ticket.title}`}
          onClick={() => {}}
          />
        </div>
      ))}
    </div>
  );
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

function Wallpaper() {
  return (
    <div style={{display: 'flex', position: 'absolute', zIndex: 0, width: '100vw', height: '100vh'}}>
      <DiamondWallpaper/>
    </div>
  )
}

function DiamondWallpaper() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const diamondSize = 40 // width & height in pixels (includes padding)

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const cols = Math.ceil(screenSize.width / diamondSize)
  const rows = Math.ceil(screenSize.height / diamondSize)
  const total = rows * cols

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${diamondSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${diamondSize}px)`,
        width: '100vw',
        height: '100vh',
        zIndex: 1
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <p key={i} style={{color: 'rgba(58, 0, 62, 1)', zIndex: 1}}>&diams;</p>
      ))}
    </div>
  )
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [tickets, setTickets] = useState([])
  const [error, setError] = useState(null)

  const animTime = 1250 // 1.25 seconds + service transit

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/.netlify/functions/fetchTickets', {
          method: 'POST',
        })

        // const data = await response.json()

        // if (!response.ok) {
        //   throw new Error(data.error || 'failed to fetch tickets')
        // }

        /*
        const data = {
          "response": "fetch tickets successful",
          "tickets": [
            "braeden-meikle-site": [
              {
                "dev": "braeden",
                "notes": "add btn for projects, reduce code, add link on main site",
                "repo": "braeden-meikle-site",
                "status": "active",
                "tag": "ref",
                "title": "launch-pg"
              },
              {
                "dev": "braeden",
                "notes": "some notes for new branch",
                "repo": "braeden-meikle-site",
                "status": "new",
                "tag": "ref",
                "title": "site-ticket"
              },
            ],
            "bz-dev": [
              {
                "dev": "braeden",
                "notes": "all tickets should be same size",
                "repo": "bz-dev",
                "status": "active",
                "tag": "ftr",
                "title": "unify-tickets"
              },
              {
                "dev": "braeden",
                "notes": "some notes for new branch",
                "repo": "bz-dev",
                "status": "new",
                "tag": "ftr",
                "title": "bz-dev-ticket"
              }
            ]
          ]
        }
        */

        const data = {
          "response": "fetch tickets successful",
          "tickets": [
            {
              "dev": "braeden",
              "notes": "add btn for projects, reduce code, add link on main site",
              "repo": "braeden-meikle-site",
              "status": "active",
              "tag": "ref",
              "title": "launch-pg"
            },
            {
              "dev": "braeden",
              "notes": "some notes for new branch",
              "repo": "braeden-meikle-site",
              "status": "new",
              "tag": "ref",
              "title": "site-ticket"
            },
            {
              "dev": "braeden",
              "notes": "all tickets should be same size",
              "repo": "bz-dev",
              "status": "active",
              "tag": "ftr",
              "title": "unify-tickets"
            },
            {
              "dev": "braeden",
              "notes": "some notes for new branch",
              "repo": "bz-dev",
              "status": "new",
              "tag": "ftr",
              "title": "bz-dev-ticket"
            }
          ]
        }

        setTimeout(() => {
          setTickets(data.tickets)
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
          <ByteTransfer />
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
          <Wallpaper />
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
            <TabBar />
          </div>
          <TicketList error={error} tickets={tickets} />
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
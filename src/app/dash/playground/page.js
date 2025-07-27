'use client'

import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { Work } from '../../cmp/Components'

function CurlyBrace({ x = 0, y = 0, height = 200, width = 20, stroke = "white" }) {
  const control = height / 4;

  const path = `
    M ${x + width} ${y}
    q -${width} ${control}, 0 ${control * 2}
    q ${width} ${control}, 0 ${control * 2}
  `;

  return (
    <svg style={{ position: 'absolute', top: y, left: x }} width={width * 2} height={height}>
      <path
        d={path}
        fill="transparent"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

function TicketList() {
  const [tickets, setTickets] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchTickets = async () => {
      try {
        const response = await fetch('https://berzerk-agile-dev-backend-production.up.railway.app/fetch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
          body: JSON.stringify({ username: 'braeden' }),
        })

        const data = await response.json()

        console.log(data)

        if (!response.ok) {
          throw new Error(data.error || 'failed to fetch tickets')
        }

        setTickets(data.tickets)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchTickets()
  }, [])

  function Desc() {
    return <div></div>
  }

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tickets.map((ticket, index) => (
        <div key={index}>
          <Work 
          id={index} 
          repo={ticket.repo}
          dev={ticket.dev}
          tag={ticket.tag}
          pfp={'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg'}
          title={ticket.title}
          notes={ticket.notes}
          status={ticket.status}
          branch={`${ticket.tag}/${ticket.title}`}
          isToggled={ticket.status == 'active'} 
          isMerging={ticket.status == 'merging'} 
          onClick={() => {}}
          />
        </div>
      ))}
    </div>
  );
}


export default function DevPlaygroundPage() {
  return (
    <div style={{display: 'flex'}}>
      <TicketList/>
    </div>
  )
}


// this goes on the home page for marketing:

{/* <div style={{display:'flex', flexDirection:'column', gap: 10}}>
        <div>
          <p style={{color:'rgb(125,125,125)'}}>Make a ticket</p>
          <p style={{color:'rgb(125,125,125)'}}>Fill out details</p>
          <p style={{color:'rgb(125,125,125)'}}>Attach test plan</p>
          <p style={{color:'rgb(125,125,125)'}}>Set status</p>
        </div>
        <div>
          <pre style={{color:'rgb(125,125,125)'}}>git pull</pre>
          <pre style={{color:'rgb(125,125,125)'}}>{'git checkout -b <branch>'}</pre>
          <pre style={{color:'rgb(125,125,125)'}}>{'git push'}</pre>
        </div>
      </div> */}
      {/* <div style={{ position: 'relative', height: '400px' }}>
        <CurlyBrace x={50} y={50} height={300} width={15} stroke="gray" />
      </div> */}
      {/* <div style={{position:'absolute', marginTop: 100, marginLeft: 225, fontSize: 50}}> */}
        {/* <pre style={{color:'rgba(255, 64, 242, 1)'}}>{'}'}</pre> */}
        {/* <CurlyBrace x={50} y={0} height={300} width={20} stroke="white" /> */}
      {/* </div> */}
      {/* <div style={{marginTop: 100, marginLeft: 150}}>
        <pre style={{color:'rgba(255, 64, 242, 1)'}}>{'bz make <repo> <tag> <title> <notes>'}</pre>
      </div> */}
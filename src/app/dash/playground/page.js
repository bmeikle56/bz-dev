'use client'

// import Image from 'next/image'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

export default function DevPlaygroundPage() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{display:'flex', flexDirection:'column', gap: 10}}>
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
      </div>
      <div style={{marginTop: 100, marginLeft: 150}}>
        <pre style={{color:'rgba(255, 64, 242, 1)'}}>{'bz make <repo> <tag> <title> <notes>'}</pre>
      </div>
    </div>
  )
}
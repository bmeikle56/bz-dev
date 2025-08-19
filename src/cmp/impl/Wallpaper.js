import { useEffect, useState } from 'react'

function Wallpaper() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const diamondSize = 40

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const cols = Math.ceil(screenSize.width / diamondSize)
  const rows = Math.ceil(screenSize.height / diamondSize)
  const total = rows * cols

  return (
    <div style={{display: 'flex', position: 'absolute', zIndex: 0, width: '100vw', height: '100vh'}}>
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
    </div>
  )
}

export default Wallpaper
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const x = event.clientX
      const y = event.clientY
      setPosition({ x, y })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Función de limpieza para evitar listeners acumulados
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          left: '-20px',
          width: '40px',
          height: '40px',
          opacity: 0.8,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          borderRadius: '50%',
          backgroundColor: '#09f',
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App

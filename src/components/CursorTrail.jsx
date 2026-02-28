import { useEffect, useRef } from 'react'
import './CursorTrail.css'

function CursorTrail() {
    const mainRef = useRef(null)
    const ringRef = useRef(null)
    const mouse = useRef({ x: 0, y: 0 })
    const ring = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const main = document.createElement('div')
        main.classList.add('cursor-main')
        const ringEl = document.createElement('div')
        ringEl.classList.add('cursor-ring')
        document.body.appendChild(main)
        document.body.appendChild(ringEl)
        mainRef.current = main
        ringRef.current = ringEl

        const onMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY }
            main.style.left = `${e.clientX}px`
            main.style.top = `${e.clientY}px`
        }
        window.addEventListener('mousemove', onMove)

        let animId
        const animate = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.12
            ring.current.y += (mouse.current.y - ring.current.y) * 0.12
            ringEl.style.left = `${ring.current.x}px`
            ringEl.style.top = `${ring.current.y}px`
            animId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('mousemove', onMove)
            main.remove()
            ringEl.remove()
        }
    }, [])

    return null
}

export default CursorTrail
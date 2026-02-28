import { useEffect, useRef } from 'react'
import './Ocean.css'

function Ocean() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let t = 0
        let animId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Stars
        const stars = Array.from({ length: 120 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 0.6,
            r: Math.random() * 1.5 + 0.3,
            twinkle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.02 + 0.005,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Sky gradient
            const sky = ctx.createLinearGradient(0, 0, 0, canvas.height)
            sky.addColorStop(0, '#010812')
            sky.addColorStop(0.5, '#040d1a')
            sky.addColorStop(1, '#071220')
            ctx.fillStyle = sky
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Stars
            stars.forEach(s => {
                s.twinkle += s.speed
                const alpha = 0.4 + Math.sin(s.twinkle) * 0.35
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(245,237,224,${alpha})`
                ctx.fill()
            })

            // Moon glow
            const moonGlow = ctx.createRadialGradient(canvas.width * 0.78, 80, 0, canvas.width * 0.78, 80, 120)
            moonGlow.addColorStop(0, 'rgba(212,164,55,0.12)')
            moonGlow.addColorStop(1, 'transparent')
            ctx.fillStyle = moonGlow
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Moon
            ctx.beginPath()
            ctx.arc(canvas.width * 0.78, 80, 28, 0, Math.PI * 2)
            ctx.fillStyle = '#f5ede0'
            ctx.shadowColor = 'rgba(212,164,55,0.5)'
            ctx.shadowBlur = 30
            ctx.fill()
            ctx.shadowBlur = 0

            // Ocean waves
            const waves = [
                { amp: 22, freq: 0.008, speed: 0.018, yBase: 0.72, color: 'rgba(8,24,54,0.9)' },
                { amp: 16, freq: 0.012, speed: 0.025, yBase: 0.75, color: 'rgba(6,18,42,0.95)' },
                { amp: 12, freq: 0.018, speed: 0.032, yBase: 0.78, color: 'rgba(4,13,26,1)' },
            ]

            waves.forEach(w => {
                ctx.beginPath()
                ctx.moveTo(0, canvas.height)
                for (let x = 0; x <= canvas.width; x += 2) {
                    const y = canvas.height * w.yBase + Math.sin(x * w.freq + t * w.speed * 60) * w.amp
                    ctx.lineTo(x, y)
                }
                ctx.lineTo(canvas.width, canvas.height)
                ctx.closePath()
                ctx.fillStyle = w.color
                ctx.fill()
            })

            // Ocean shimmer
            for (let i = 0; i < 5; i++) {
                const sx = (t * 30 * (i + 1)) % canvas.width
                const sy = canvas.height * 0.78 + Math.sin(t * 0.05 + i) * 20
                const shimmer = ctx.createLinearGradient(sx, sy, sx + 60, sy)
                shimmer.addColorStop(0, 'transparent')
                shimmer.addColorStop(0.5, `rgba(212,164,55,${0.04 + i * 0.01})`)
                shimmer.addColorStop(1, 'transparent')
                ctx.fillStyle = shimmer
                ctx.fillRect(sx, sy, 60, 2)
            }

            t++
            animId = requestAnimationFrame(draw)
        }

        draw()
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="ocean-canvas" />
}

export default Ocean
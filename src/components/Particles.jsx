import { useEffect, useRef } from 'react'
import './Particles.css'

function Particles() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let petals = []
        let animId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Draw a cherry blossom petal shape
        const drawPetal = (ctx, x, y, size, rotation, opacity) => {
            ctx.save()
            ctx.translate(x, y)
            ctx.rotate(rotation)
            ctx.globalAlpha = opacity
            ctx.beginPath()
            ctx.moveTo(0, -size)
            ctx.bezierCurveTo(size * 0.8, -size * 0.5, size * 0.8, size * 0.5, 0, size)
            ctx.bezierCurveTo(-size * 0.8, size * 0.5, -size * 0.8, -size * 0.5, 0, -size)
            ctx.fillStyle = `rgba(192, 24, 28, 0.6)`
            ctx.fill()
            // Petal detail line
            ctx.beginPath()
            ctx.moveTo(0, -size)
            ctx.lineTo(0, size)
            ctx.strokeStyle = `rgba(212, 164, 55, 0.3)`
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.restore()
        }

        // Spawn petals
        for (let i = 0; i < 25; i++) {
            petals.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 6 + 3,
                speedX: (Math.random() - 0.3) * 0.8,
                speedY: Math.random() * 0.6 + 0.3,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                opacity: Math.random() * 0.4 + 0.1,
                sway: Math.random() * Math.PI * 2,
                swaySpeed: Math.random() * 0.01 + 0.005,
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            petals.forEach((p) => {
                p.sway += p.swaySpeed
                p.x += p.speedX + Math.sin(p.sway) * 0.5
                p.y += p.speedY
                p.rotation += p.rotationSpeed

                // Reset when off screen
                if (p.y > canvas.height + 20) {
                    p.y = -20
                    p.x = Math.random() * canvas.width
                }
                if (p.x > canvas.width + 20) p.x = -20
                if (p.x < -20) p.x = canvas.width + 20

                drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.opacity)
            })

            animId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="particles-canvas" />
}


export default Particles

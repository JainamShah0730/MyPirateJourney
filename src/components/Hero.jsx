import { useEffect, useState } from 'react'
import './Hero.css'

const introLines = [
    { text: '"As long as I live, there are infinite chances."', class: 'line-quote', show: 800 },
    { text: 'Welcome, Captain.', class: 'line-welcome', show: 3000 },
    { text: "I know I'm not at my best right now…  But my time will come.", class: 'line-soft', show: 5200 },
]

function Hero() {
    const [phase, setPhase] = useState('intro') // intro → content
    const [visibleLines, setVisibleLines] = useState([])

    useEffect(() => {
        // Show intro lines one by one
        introLines.forEach((line, i) => {
            setTimeout(() => setVisibleLines(prev => [...prev, i]), line.show)
        })
        // Switch to main content after intro
        setTimeout(() => setPhase('content'), 8000)
    }, [])

    return (
        <section id="hero" className="hero">

            {/* Ship always visible */}
            <div className="ship-wrap">
                <div className="ship">⛵</div>
            </div>

            {/* PHASE 1 — Cinematic intro */}
            <div className={`intro-screen ${phase === 'intro' ? 'active' : 'exit'}`}>
                <div className="intro-lines">
                    {introLines.map((line, i) => (
                        <p key={i} className={`cinema-line ${line.class} ${visibleLines.includes(i) ? 'visible' : ''}`}>
                            {line.text}
                        </p>
                    ))}
                </div>
            </div>

            {/* PHASE 2 — Main hero content */}
            <div className={`hero-content ${phase === 'content' ? 'active' : ''}`}>
                <p className="hero-log">— Captain's Log · Entry 001 —</p>
                <h1 className="hero-name">Jainam <span>Shah</span></h1>
                <p className="hero-role">Navigator of the Digital Grand Line</p>
                <p className="hero-quote">"It's not about whether I can or not. I'm gonna do it because I want to."</p>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <span className="stat-label">Status</span>
                        <span className="stat-val">⛵ Sailing</span>
                    </div>
                    <div className="stat-line" />
                    <div className="hero-stat">
                        <span className="stat-label">Current Sea</span>
                        <span className="stat-val">Full-Stack Dev</span>
                    </div>
                    <div className="stat-line" />
                    <div className="hero-stat">
                        <span className="stat-label">Destination</span>
                        <span className="stat-val">The Grand Line</span>
                    </div>
                </div>

                <div className="hero-btns">
                    <a href="#about" className="btn1 btn-primary">⚓ Begin The Journey</a>
                    <a href="#contact" className="btn1 btn-secondary">Join My Crew</a>
                </div>
            </div>

            {/* Scroll hint */}
            <div className={`scroll-hint ${phase === 'content' ? 'visible' : ''}`}>
                <span>Scroll to sail</span>
                <div className="scroll-arrow" />
            </div>

        </section>
    )
}

export default Hero
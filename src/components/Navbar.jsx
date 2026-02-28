import { useState } from 'react'
import './Navbar.css'

const islands = [
    { label: 'The Captain', href: '#about', symbol: '📖' },
    { label: 'Arsenal', href: '#skills', symbol: '⚔️' },
    { label: 'Adventure Arcs', href: '#journey', symbol: '🗺️' },
    { label: 'Den Den', href: '#contact', symbol: '📡' },
]

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Top minimal bar */}
            <nav className="navbar">
                <a href="#hero" className="nav-logo">⚓ Log Pose</a>
                <ul className="nav-links">
                    {islands.map(i => (
                        <li key={i.label}>
                            <a href={i.href} onClick={() => setOpen(false)}>{i.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Floating compass */}
            <div className={`compass-btn ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <div className="compass-ring" />
                <div className="compass-needle">⊕</div>
            </div>

            {/* Island map menu */}
            <div className={`island-map ${open ? 'open' : ''}`}>
                <p className="map-title">— Navigation Chart —</p>
                <div className="map-islands">
                    {islands.map((island, i) => (
                        <a
                            key={island.label}
                            href={island.href}
                            className="map-island"
                            onClick={() => setOpen(false)}
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <span className="island-symbol">{island.symbol}</span>
                            <span className="island-label">{island.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar
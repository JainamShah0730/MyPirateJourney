import './Skills.css'

const islands = [
    {
        emoji: '🌊', name: 'Frontend', island: 'Island of Forms',
        story: 'Survived 200+ layout battles. Mastered the art of the visible world.',
        tools: 'React · Next.js · HTML · CSS · Tailwind',
        badge: '🏆 Island Claimed',
    },
    {
        emoji: '⚙️', name: 'Backend', island: 'Island of Engines',
        story: 'Descended into the engine room. Built APIs that never sleep.',
        tools: 'Node.js · Express · Python · REST',
        badge: '🏆 Island Claimed',
    },
    {
        emoji: '🗄️', name: 'Databases', island: 'Island of Treasures',
        story: 'Charted the vault of data. Every schema a map to hidden gold.',
        tools: 'MongoDB · PostgreSQL · Redis',
        badge: '⚔️ Still Exploring',
    },
    {
        emoji: '🔥', name: 'Problem Solving', island: 'Island of Haki',
        story: 'Defeated recursion monsters. Still mastering the dynamic seas.',
        tools: 'Algorithms · Data Structures · Systems',
        badge: '⚔️ Training Daily',
    },
]

function Skills() {
    return (
        <section id="skills" className="skills">
            <p className="section-label fade-up">🗺️ Islands Discovered</p>
            <h2 className="section-title fade-up delay-1">My <span>Arsenal</span></h2>
            <p className="skills-sub fade-up delay-2">
                Every island I've landed on has made me stronger.
                Hover to see what I picked up there.
            </p>
            <div className="islands-grid">
                {islands.map((island, i) => (
                    <div className={`island-card fade-up delay-${i + 1}`} key={island.name}>
                        <div className="island-front">
                            <span className="island-tag">{island.island}</span>
                            <div className="island-emoji">{island.emoji}</div>
                            <div className="island-name">{island.name}</div>
                            <div className="island-story">{island.story}</div>
                            <div className="island-badge">{island.badge}</div>
                        </div>
                        <div className="island-back">
                            <div className="back-title">Tools Gained</div>
                            <div className="back-tools">{island.tools}</div>
                            <div className="back-symbol">⚡</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
import './Projects.css'

const arcs = [
    {
        arc: 'Arc I · East Blue',
        emoji: '🌊',
        title: 'Project Name',
        story: 'Where it all began. My first real challenge on the open sea. I didn\'t know everything — but I figured it out.',
        desc: 'A full-stack application built from scratch. Every line of code a step forward.',
        tech: ['React', 'Node.js', 'MongoDB'],
        status: 'Island Claimed ✓',
        statusClass: 'claimed',
    },
    {
        arc: 'Arc II · Alabasta',
        emoji: '⚡',
        title: 'Project Name',
        story: 'A battle through the desert. Complex, demanding, rewarding. I almost gave up. I didn\'t.',
        desc: 'An ambitious platform solving real problems with elegant architecture.',
        tech: ['Next.js', 'PostgreSQL', 'AWS'],
        status: 'Island Claimed ✓',
        statusClass: 'claimed',
    },
    {
        arc: 'Arc III · Currently Sailing',
        emoji: '🔭',
        title: 'Next Adventure',
        story: '"I know I\'m not at my best right now, but my time will come." The horizon is wide. I\'m sailing toward it.',
        desc: 'Something big is being built. Stay tuned, nakama.',
        tech: ['???', '???', '???'],
        status: '⛵ En Route...',
        statusClass: 'sailing',
    },
]

function Projects() {
    return (
        <section id="journey" className="projects">
            <p className="section-label fade-up">⚔️ Adventure Arcs</p>
            <h2 className="section-title fade-up delay-1">The <span>Journey</span></h2>
            <div className="arcs-grid">
                {arcs.map((arc, i) => (
                    <div className={`arc-card fade-up delay-${i + 1}`} key={arc.arc}>
                        <div className="arc-header">
                            <span className="arc-emoji">{arc.emoji}</span>
                            <span className={`arc-status ${arc.statusClass}`}>{arc.status}</span>
                        </div>
                        <div className="arc-body">
                            <p className="arc-label">{arc.arc}</p>
                            <h3 className="arc-title">{arc.title}</h3>
                            <p className="arc-story">"{arc.story}"</p>
                            <p className="arc-desc">{arc.desc}</p>
                            <div className="arc-tech">
                                {arc.tech.map((t, j) => (
                                    <span className="arc-tag" key={`${t}-${j}`}>{t}</span>
                                ))}
                            </div>
                            <div className="arc-links">
                                <a href="#" className="proj-link">→ Live Demo</a>
                                <a href="#" className="proj-link">→ GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
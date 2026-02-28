import './About.css'

function About() {
    return (
        <section id="about" className="about">
            <div className="logbook">
                <div className="logbook-cover fade-up">
                    <div className="cover-label">Captain's</div>
                    <div className="cover-title">Logbook</div>
                    <div className="cover-symbol">⚓</div>
                </div>

                <div className="logbook-pages">
                    <div className="log-entry fade-up delay-1">
                        <span className="log-date">Day 001 · East Blue · Where it began</span>
                        <p>Every great journey starts with a single step off the shore.
                            Mine started with a single line of code — and I've never looked back.
                            The ocean of technology is vast, mysterious, and full of undiscovered islands.
                            I sail it with curiosity and an unbreakable will.</p>
                    </div>

                    <div className="log-entry fade-up delay-2">
                        <span className="log-date">Day ??? · The Grand Line · Still going</span>
                        <p>I'm not the strongest. I'm not the fastest. But I show up every single day.
                            I learn something new. I break things, fix them, and grow.
                            Each bug defeated is a sea king slain.
                            Each project shipped is a new island claimed.</p>
                    </div>

                    <div className="log-entry fade-up delay-3">
                        <span className="log-date">Day ∞ · Still Sailing · No end in sight</span>
                        <p>This journey doesn't have a final destination — it has infinite islands.
                            I open this log every morning not to remember where I've been,
                            but to remind myself: <em>I am the captain. I am moving forward.</em>
                            The sea is wide. And I am ready.</p>
                    </div>

                    <div className="wanted-mini fade-up delay-4">
                        <div className="w-header">WANTED</div>
                        <div className="w-emoji">🏴‍☠️</div>
                        <div className="w-name">Your Name</div>
                        <div className="w-title">"The Digital Navigator"</div>
                        <div className="w-bounty">∞ Berry</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
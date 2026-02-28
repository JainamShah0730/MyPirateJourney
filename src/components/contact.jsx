import './Contact.css'

function Contact() {
    function handleSubmit(e) {
        e.preventDefault()
        alert('Message sent, nakama! ⚓')
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-inner">
                <p className="section-label fade-up">📡 Den Den Mushi</p>
                <h2 className="section-title fade-up delay-1">Join My <span>Crew</span></h2>
                <p className="contact-sub fade-up delay-2">
                    "It's not about whether I can or not.<br />
                    I'm gonna do it because I want to."
                </p>

                <form className="contact-form fade-up delay-3" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="Monkey D. Luffy..." />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="pirate@grandline.com" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="I want you to join my crew..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message ⚓</button>
                </form>

                <div className="final-quote fade-up delay-4">
                    <p>"This journey is far from over."</p>
                    <a href="#hero" className="sail-again">↑ Sail Again</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
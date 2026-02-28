import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const SERVICE_ID = 'service_q6xworn'
const TEMPLATE_ID = 'template_m05sx9p'
const PUBLIC_KEY = 'K8kv-8WdZtm-7Ixjr'

function Contact() {
    const formRef = useRef()
    const [status, setStatus] = useState('idle')

    function handleSubmit(e) {
        e.preventDefault()
        setStatus('sending')

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus('sent')
                formRef.current.reset()
            })
            .catch((error) => {
                console.log('EmailJS error:', error)
                setStatus('error')
            })
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

                {status === 'sent' && (
                    <div className="form-success">
                        ⚓ Message received, nakama! I'll respond soon.
                    </div>
                )}

                {status === 'error' && (
                    <div className="form-error">
                        ⚠️ Something went wrong. Try again!
                    </div>
                )}

                <form
                    ref={formRef}
                    className="contact-form fade-up delay-3"
                    onSubmit={handleSubmit}
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Monkey D. Luffy..."
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input
                                type="email"
                                name="from_email"
                                placeholder="pirate@grandline.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="I want you to join my crew..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? '⛵ Sending...' : 'Send Message ⚓'}
                    </button>
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
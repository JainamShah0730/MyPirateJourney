import './QuoteBanner.css'

function QuoteBanner({ quote, chapter }) {
    return (
        <div className="quote-banner fade-up">
            <div className="quote-line" />
            <div className="quote-content">
                <span className="quote-mark">"</span>
                <p className="quote-text">{quote}</p>
                <span className="quote-chapter">{chapter}</span>
            </div>
            <div className="quote-line" />
        </div>
    )
}

export default QuoteBanner
import { useState, useEffect } from 'react'
import './App.css'
import InstagramIcon from './instagram-svgrepo-com.svg'
import TikTokIcon from './tiktok-svgrepo-com.svg'
import YouTubeIcon from './youtube-168-svgrepo-com.svg'


function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [mailingListStatus, setMailingListStatus] = useState(null)

  const handleMailingListSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: Connect to your email service (e.g. Mailchimp, ConvertKit)
    setMailingListStatus('success')
    setEmail('')
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'shows', 'about', 'tv', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Sepideh Kaav</div>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('home')
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#shows"
                className={activeSection === 'shows' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('shows')
                }}
              >
                Shows
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tv"
                className={activeSection === 'tv' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('tv')
                }}
              >
                TV Appearances
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Sepideh Kaav</h1>
          <p className="hero-subtitle">Stand-Up Comedian</p>
          <button
            className="cta-button"
            onClick={() => scrollToSection('shows')}
          >
            See Upcoming Shows
          </button>
        </div>
      </section>

      <section id="shows" className="shows-section">
        <div className="container">
          <h2 className="section-title">Upcoming Shows</h2>
          <div className="shows-grid">
            <div className="show-card">
              <h3>Comedy Club NYC</h3>
              <p className="show-date">February 15, 2026</p>
              <p className="show-location">New York, NY</p>
              <button className="show-button">Get Tickets</button>
            </div>
            <div className="show-card">
              <h3>Laugh Factory LA</h3>
              <p className="show-date">March 2, 2026</p>
              <p className="show-location">Los Angeles, CA</p>
              <button className="show-button">Get Tickets</button>
            </div>
            <div className="show-card">
              <h3>Comedy Central Live</h3>
              <p className="show-date">March 20, 2026</p>
              <p className="show-location">Chicago, IL</p>
              <button className="show-button">Get Tickets</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
              Sepideh Kaav is an Iranian stand-up comedian based in Berlin.
              She grew up in the Middle East, spoiled by oil money and patriarchy, 
              and came to Europe to pursue her dream of becoming an average employee. 
              Her humor has been described as dark and unfiltered while shedding light on unnecessary truths. 
              </p>
              <div className="persianality-disorder">
              <h3>Solo Show: Persianality Disorder</h3>
            <p>
            Persianality Disorder:
            Persianality Disorder is her attempt to make sense of growing up in Iran,
            escaping to Europe, and realizing that the West isn’t exactly what it advertises. 
            Expect political rants, personal confessions, Middle Eastern realities, 
            and uncomfortable questions about Western “values.” It’s dark, honest,
            and occasionally a bit too real.
            </p>
              <img src="/persianality_disorder.jpg" alt="Persianality Disorder" />
              </div>
            </div>
            <div className="about-image">
              <img src="/sepideh_1.jpeg" alt="Sepideh Kaav" />
            </div>
          </div>
        </div>
      </section>

      <section id="tv" className="tv-section">
        <div className="container">
          <h2 className="section-title">TV Appearances</h2>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EWzmZ0ALjV8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p>For booking inquiries and general information, please reach out:</p>
            <div className="contact-info">
              <div className="contact-item">
                <a href="mailto:sepcomedy@gmail.com">sepcomedy@gmail.com</a>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/sepcomedy/" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="instagram-icon" />
              </a>
              <a href="https://www.tiktok.com/@sepcomedy" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={TikTokIcon} alt="TikTok" className="tiktok-icon" />
              </a>
              <a href="https://youtube.com/@sepcomedy" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={YouTubeIcon} alt="YouTube" className="youtube-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="mailing-list" className="mailing-list-section">
        <div className="container">
          <h2 className="section-title">Join the Mailing List</h2>
          <p className="mailing-list-subtitle">
            Get updates on shows, new content, and more.
          </p>
          <form className="mailing-list-form" onSubmit={handleMailingListSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mailing-list-input"
              required
              aria-label="Email address"
            />
            <button type="submit" className="mailing-list-button">
              Subscribe
            </button>
          </form>
          {mailingListStatus === 'success' && (
            <p className="mailing-list-message">Thanks for subscribing!</p>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Sepideh Kaav. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

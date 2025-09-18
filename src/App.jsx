import './App.css'

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="CampusCon home">
          <Logo />
          <span>CampusCon</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#download" className="btn btn-sm btn-primary">Download</a>
        </nav>
        <button className="nav-toggle" aria-label="Open menu" aria-expanded="false" onClick={() => {
          const body = document.body; const btn = document.querySelector('.nav-toggle');
          const expanded = btn?.getAttribute('aria-expanded') === 'true';
          btn?.setAttribute('aria-expanded', String(!expanded));
          body.classList.toggle('nav-open');
        }}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Connecting Students, Societies, and Opportunities</h1>
          <p className="lead">CampusCon is the modern student-community platform for universities and colleges. Discover events, join groups, message peers, and build your campus presence.</p>
          <StoreButtons />
        </div>
        <div className="hero-visual" aria-hidden="true">
          <PhoneMock />
        </div>
      </div>
      <div className="hero-bg" aria-hidden="true"></div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container narrow">
        <h2>What is CampusCon?</h2>
        <p>CampusCon is a community platform built for students and societies. It helps you explore campus life, find events, join interest-based groups, and collaborate with societies across your university or college. Whether you're a fresher or a society leader, CampusCon makes it simple to connect and thrive.</p>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { cls: 'i-profile', title: 'Profiles', text: 'Create a standout student or society profile that showcases your interests, achievements, and links.' },
    { cls: 'i-messaging', title: 'Messaging', text: 'Direct messages and group chats keep everyone connected in real time.' },
    { cls: 'i-events', title: 'Events', text: 'Discover and host campus events with RSVP, reminders, and smart calendars.' },
    { cls: 'i-bricks', title: 'Bricks', text: 'Stack accomplishments, projects, and roles into a living portfolio unique to your journey.' },
    { cls: 'i-deeds', title: 'Deeds', text: 'Track contributions and volunteer work to build credibility and recognition.' },
    { cls: 'i-groups', title: 'Groups', text: 'Join clubs and societies or create your own community with roles and moderation tools.' },
  ]
  return (
    <section id="features" className="section features">
      <div className="container">
        <h2>Everything you need to power your campus community</h2>
        <div className="grid">
          {items.map((i) => (
            <article key={i.title} className="feature">
              <div className={`i ${i.cls}`} aria-hidden="true"></div>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="download" className="section cta">
      <div className="container cta-inner">
        <h2>Get the app and start connecting</h2>
        <p>Available soon on your favorite app stores.</p>
        <StoreButtons />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <a className="brand" href="#home">
          <Logo />
          <span>CampusCon</span>
        </a>
        <nav className="footer-links">
          <a href="#" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="#" aria-label="Terms of Service">Terms of Service</a>
          <a href="#" aria-label="Contact">Contact</a>
        </nav>
        <div className="social">
          <a href="https://www.instagram.com/campuscon_/" aria-label="Instagram" className="social-icon" title="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM18 6.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="social-icon" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.77 1.87-2.77 3.8V24h-4V8z"/></svg>
          </a>
        </div>
      </div>
      <div className="container tinyprint">© {new Date().getFullYear()} CampusCon. All rights reserved.</div>
    </footer>
  )
}

function StoreButtons() {
  return (
    <div className="store-buttons">
      <a className="store google" href="#" aria-label="Get CampusCon on Google Play">
        <GooglePlayIcon />
        <span>
          <small>Get it on</small>
          Google Play
        </span>
      </a>
      <a className="store apple" href="#" aria-label="Download CampusCon on the App Store">
        <AppleIcon />
        <span>
          <small>Download on the</small>
          App Store
        </span>
      </a>
    </div>
  )
}

const Logo = () => null;

function GooglePlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.6 2.2c-.38.2-.6.6-.6 1.02v17.56c0 .42.22.82.6 1.02l10.73-9.8z"/><path fill="currentColor" d="M20.3 8.7l-2.9-1.7-3.6 3.3 3.6 3.3 2.9-1.7c.9-.5.9-1.9 0-2.5z" opacity=".8"/><path fill="currentColor" d="M14.8 13.6l-3.86-3.55L3 20.8c.11.16.26.3.45.4.38.2.83.18 1.19-.05z" opacity=".7"/><path fill="currentColor" d="M14.8 10.4L4.64 2.86c-.36-.23-.81-.25-1.19-.05-.19.1-.34.24-.45.4l7.94 10.75z" opacity=".9"/></svg>
  )
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.36 1.64c.02 1.03-.37 1.98-1.02 2.68-.66.71-1.73 1.27-2.8 1.19-.11-1.01.39-2.06 1.04-2.73.7-.72 1.87-1.24 2.78-1.14zM20.77 17.05c-.55 1.28-.82 1.85-1.53 2.98-1 1.54-2.41 3.46-4.19 3.49-1.57.03-1.98-1.02-4.12-1.01-2.14.01-2.6 1.03-4.17 1-1.79-.03-3.16-1.75-4.16-3.29C.84 17.72-.6 13.07 1.69 10.1c1.12-1.47 2.89-2.4 4.68-2.43 1.83-.04 3.55 1.09 4.12 1.09.55 0 2.82-1.35 4.76-1.15.81.03 3.1.33 4.57 2.5-3.88 2.11-3.27 7.64 0 6.94-.2.67-.55 1.33-1.05 2z"/></svg>
  )
}

function PhoneMock() {
  return (
    <div className="phone">
      <div className="phone-notch"></div>
      <div className="screen">
        <img 
          src="/app-screenshot.png" 
          alt="CampusCon App Screenshot" 
          className="app-screenshot"
        />
      </div>
    </div>
  )
}

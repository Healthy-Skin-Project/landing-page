const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Healthy Skin Project</span>
            <p className="footer-tagline">
              Supporting students on their skin health journey.
            </p>
          </div>
          <nav className="footer-nav">
            <a href="#about-acne">About Acne</a>
            <a href="#team">Our Team</a>
            <a href="#resources">Resources</a>
            <a href="#">Contact Us</a>
          </nav>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/healthy.skin_project/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@thehealthyskinproject"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@TheHealthySkinProject"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Healthy Skin Project · Acne Community
            Engagement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

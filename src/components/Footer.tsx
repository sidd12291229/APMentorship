import { Link } from "react-router-dom";
import { aboutUs, discordInviteCode } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="wordmark-mark">AMN</span>
          <p className="footer-tagline">Built by students, for students.</p>
          <a
            className="footer-discord"
            href={discordInviteCode}
            target="_blank"
            rel="noreferrer"
          >
            Join us on Discord
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/library">Library</Link>
          <Link to="/events">Events</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="about-disclaimer">{aboutUs.disclaimer}</p>
          <p className="footer-copyright">
            &copy; {year} AP Mentorship Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
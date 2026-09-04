import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/">
          <span className="wordmark-mark">AMN</span>
          <span className="wordmark-sub">AP MENTORSHIP NETWORK</span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="siteNav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>

        <nav
          className={isOpen ? "site-nav is-open" : "site-nav"}
          id="siteNav"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

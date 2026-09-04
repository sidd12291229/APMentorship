import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { navItems } from "../data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section" id="site-index">
        <div className="section-head">
          <p className="eyebrow">INDEX / WHAT'S INSIDE</p>
          <h2>Find your way around.</h2>
        </div>
        <ul className="contact-lines">
          {navItems.map((item) => (
            <li key={item.path}>
              <span>{item.label}</span>
              <Link className="text-link" to={item.path}>
                Open
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

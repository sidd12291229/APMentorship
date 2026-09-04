import { aboutUs } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <h2>Why AMN exists</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          {aboutUs.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="about-subjects">
          <h3>Subjects We Support</h3>
          <p>{aboutUs.subjectsWeSupportIntro}</p>
          <ul>
            {aboutUs.subjectsWeSupport.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
          <p>{aboutUs.subjectsWeSupportOutro}</p>
        </div>

        <div className="about-offer">
          <h3>What We Offer</h3>
          {aboutUs.whatWeOffer.map((item) => (
            <div className="about-offer-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="about-mission">
          <h3>Our Mission</h3>
          {aboutUs.mission.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
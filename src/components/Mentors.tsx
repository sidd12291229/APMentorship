import { Link } from "react-router-dom";
import { mentors } from "../data";

export default function Mentors() {
  return (
    <section className="section section-alt" id="mentors">
      <div className="section-inner">
        <div className="section-head">
          <h2>Our Mentors</h2>
          <p className="section-lede">
            Every mentor has aced their respective exams they teach with a 5
          </p>
        </div>

        <div className="roster" role="table" aria-label="Mentor roster">
          <div className="roster-row roster-head" role="row">
            <span role="columnheader">Name</span>
            <span role="columnheader">Teaching</span>
            <span role="columnheader">Background</span>
            <span role="columnheader">Status</span>
          </div>
          {mentors.map((mentor) => (
            <div className="roster-row" role="row" key={mentor.name}>
              <span data-label="Name">{mentor.name}</span>
              <span data-label="Subjects">{mentor.subjects}</span>
              <span data-label="Background">{mentor.background}</span>
              <span data-label="Status">{mentor.status}</span>
            </div>
          ))}
        </div>

        <p className="roster-note">
          Want to see your name here?{" "}
          <Link className="text-link" to="/contact">
            get in touch
          </Link>{" "}
          with us to join AMN
        </p>
      </div>
    </section>
  );
}

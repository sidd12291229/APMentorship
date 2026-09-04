import { useState } from "react";
import { subjects } from "../data";

export default function SubjectHub() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="section" id="subjects">
      <div className="section-head">
        <h2>Subjects offered</h2>
      </div>

      <ul className="catalog">
        {subjects.map((subject) => {
          const isOpen = openIds.has(subject.id);
          return (
            <li
              className={isOpen ? "catalog-item is-open" : "catalog-item"}
              data-dept={subject.dept}
              key={subject.id}
            >
              <button
                className="catalog-trigger"
                aria-expanded={isOpen}
                onClick={() => toggle(subject.id)}
              >
                <span className="catalog-tag">{subject.tag}</span>
                <span className="catalog-name">{subject.name}</span>
                <span className="catalog-toggle" aria-hidden="true">
                  ＋
                </span>
              </button>
              <div className="catalog-body">
                <div className="catalog-body-inner">
                  <p></p>
                  <ul className="plain-list">
                    <li>{subject.description}</li>
                    <li>Course overview and unit weights</li>
                    <li>Recommended external resources</li>
                    <li>Official exam information</li>
                    <li>Workshop slides</li>
                    <li>Study strategies</li>
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

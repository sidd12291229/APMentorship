import { libraryTree } from "../data";

export default function ResourceLibrary() {
  return (
    <section className="section section-alt" id="library">
      <div className="section-inner">
        <div className="section-head">
          <h2>All previous lessons in one place.</h2>
          <p className="section-lede">
            Every resource is filed under Subject, then Unit, then Resource
            type.
          </p>
        </div>

        <div className="callnumber-demo">
          <p className="callnumber-label">Example</p>
          <div className="callnumber-path">
            <span>AP Physics 1</span>
            <span className="sep">/</span>
            <span>Unit 1 — Kinematics and Dynamics</span>
            <span className="sep">/</span>
            <span>Resource</span>
          </div>
        </div>

        <div className="tree">
          {libraryTree.map((branch, i) => (
            <details className="tree-node" open={i === 0} key={branch.subject}>
              <summary>{branch.subject}</summary>
              <div className="tree-children">
                {branch.units.map((unit) => (
                  <details className="tree-node" key={unit.unit}>
                    <summary>{unit.unit}</summary>
                    <ul className="plain-list tree-leaf">
                      {unit.resources.map((resource) => (
                        <li key={resource.title}>
                          {resource.downloadUrl ? (
                            <a
                              href={resource.downloadUrl}
                              download
                              className="download-link"
                            >
                              {resource.title} <span>↓</span>
                            </a>
                          ) : (
                            resource.title
                          )}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
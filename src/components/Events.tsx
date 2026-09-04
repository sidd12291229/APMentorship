import { events, discordInviteCode } from "../data";

export default function Events() {
  return (
    <section className="section" id="events">
      <div className="section-head">
        <h2>What's on the calendar</h2>
        <p className="section-lede">
          Workshops run on Discord voice and video. The presentations are added to
          the library within a week for anyone who can't make it live.
        </p>
      </div>

      <div className="docket" role="table" aria-label="Upcoming workshops">
        <div className="docket-row docket-head" role="row">
          <span role="columnheader">Date</span>
          <span role="columnheader">Time</span>
          <span role="columnheader">Subject</span>
          <span role="columnheader">Topic</span>
          <span role="columnheader">Presenter</span>
          <span role="columnheader"></span>
        </div>
        {events.length === 0 ? (
          <p className="docket-empty">
            Nothing on the docket right now — check back soon or{" "}
            <a className="text-link" href={discordInviteCode}>
              join the Discord
            </a>{" "}
            to get notified when the next workshop is announced.
          </p>
        ) : (
          events.map((event) => (
            <div className="docket-row" role="row" key={`${event.date}-${event.topic}`}>
              <span data-label="Date">{event.date}</span>
              <span data-label="Time">{event.time}</span>
              <span data-label="Subject">{event.subject}</span>
              <span data-label="Topic">{event.topic}</span>
              <span data-label="Presenter">{event.presenter}</span>
              <span data-label="">
                <a className="text-link" href="#">
                  Register
                </a>
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
import { useState, type FormEvent, type ChangeEvent } from "react";
import { web3FormsAccessKey } from "../data";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [validationError, setValidationError] = useState("");

  const statusText: Record<SubmitStatus, string> = {
    idle: "",
    sending: "Sending...",
    sent: "Received. Thanks, we'll get back to you if you left contact details.",
    error: "Something went wrong sending that. Try again, or email hello@amn.example.org directly.",
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim().length === 0) {
      setValidationError("Write a message before sending.");
      setStatus("idle");
      return;
    }

    setValidationError("");
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: "New message from the AMN contact form",
          name: name.trim() || "Anonymous",
          email: email.trim() || "Not provided",
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? `Request failed with status ${response.status}`);
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-inner">
        <h2>Get in touch with us.</h2>
        <p className="section-lede">
          We'd love to hear from you! Whether you want to join AMN, ask a
          question, or share feedback, drop us a message below.
          <br />
          <strong>Please Note:</strong> Anonymous messages are always read,
          but we can only reply if you leave your contact details.
        </p>
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="cf-name">Name (optional for anonymous feedback)</label>
          <input
            type="text"
            id="cf-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />

          <label htmlFor="cf-email">Email (optional for anonymous feedback)</label>
          <input
            type="email"
            id="cf-email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-primary btn-small"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          <p className="form-confirm" aria-live="polite">
            {validationError || statusText[status]}
          </p>
        </form>
      </div>
    </section>
  );
}
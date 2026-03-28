import { useState } from "react";

const initialState = { name: "", email: "", message: "" };
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    sent: false,
    error: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus({ loading: true, sent: false, error: "" });

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("access_key", "ae99d394-5c82-41a6-a567-8ead2bce9284");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((response) => response.json());

      if (res.success) {
        setStatus({ loading: false, sent: true, error: "" });
        setForm(initialState);
        setErrors({});
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, sent: false }));
        }, 3000);
      } else {
        setStatus({
          loading: false,
          sent: false,
          error: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        sent: false,
        error: "Network error. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="contact-section section scroll-reveal">
      <div className="container text-center">
        <span className="section-kicker">Get In Touch</span>
        <h2 className="section-title gradient-title">Contact Me</h2>
        <p className="section-text mx-auto">
          Let&apos;s connect and discuss opportunities, collaborations, or your
          next big idea.
        </p>
      </div>

      <div className="container contact-grid">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-5 col-lg-5">
            <div className="contact-card">
              <h3>Let's talk</h3>
              <p className="contact-text">
                I'm available to take on new projects, so feel free to send me a
                message about anything that you want me to work on. you can
                contact anytime.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">
                    <i className="bi bi-envelope-fill" />
                  </span>
                  <div>
                    <p>Email</p>
                    <a href="mailto:myemail@example.com?subject=Portfolio%20Inquiry&body=Hello%20Gulshan%2C%20I%20want%20to%20connect%20with%20you.">
                      gulshansaini0125@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    <i className="bi bi-telephone-fill" />
                  </span>
                  <div>
                    <p>Phone</p>
                    <span>+91-7014957196</span>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    <i className="bi bi-geo-alt-fill" />
                  </span>
                  <div>
                    <p>Location</p>
                    <span>Jaipur (RAJ), India </span>
                  </div>
                </div>
              </div>

              <div className="socials-qr">
                <div className="contact-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-github" />
                </a>
                <a href="http://" target="_blank" rel=" noreferrer">
                  <i className="bi bi-code-slash"/>
                </a>
              </div>

              <div className="contact-qr">
                <img src="/assets/adqr-code.png" alt="QR code for resume" />
                <p>Scan to View <br /> Resume</p>
              </div>
              </div>

            </div>
          </div>

          <div className="col-md-7 col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-icon">
                  <i className="bi bi-person-fill" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? "has-error" : ""}
                  />
                </div>
                {errors.name && (
                  <span className="form-error">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-icon">
                  <i className="bi bi-envelope" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={errors.email ? "has-error" : ""}
                  />
                </div>
                {errors.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="input-icon textarea">
                  <i className="bi bi-chat-left-text" />
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={errors.message ? "has-error" : ""}
                  />
                </div>
                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>

              <button
                className="btn-primary-cta submit-btn"
                type="submit"
                disabled={status.loading}
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>

              {status.sent && (
                <div className="form-success">Message sent successfully!</div>
              )}
              {status.error && (
                <div className="form-error form-error-block">
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

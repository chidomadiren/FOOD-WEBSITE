function Contact() {
  const contactInfo = [
    { label: "Location", value: "16055 Sunningdale, Harare, Zimbabwe", icon: "📍" },
    { label: "Call us", value: "+263 77 6610 675", icon: "📞" },
    { label: "Email", value: "info@chichierestaurant.com", icon: "✉️" },
    { label: "Opening hours", value: "Mon - Sun • 8:00 AM - 10:00 PM", icon: "🕒" },
  ];

  return (
    <section className="page-shell contact-shell">
      <div className="max-w-6xl mx-auto px-6">
        <p className="page-kicker">Let’s talk</p>
        <h1 className="section-title text-red-600">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div className="info-panel contact-form-panel">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              ></textarea>

              <button
                onClick={() => alert("Message sent. Wait for your order.")}
                className="primary-btn contact-button"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="info-panel contact-info-panel">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Visit Us</h2>

            <div className="space-y-4 text-gray-700">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-item">
                  <span>{item.icon}</span>
                  <div>
                    <strong>{item.label}:</strong> {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="booking-card">
              <p className="booking-label">Need a table fast?</p>
              <h3>Reserve for lunch or dinner</h3>
              <button className="secondary-page-btn">Book a Table</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
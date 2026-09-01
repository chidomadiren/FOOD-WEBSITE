function Testimonials() {
  const reviews = [
    {
      name: "Maya K.",
      text: "Best food experience ever! The flavors were rich, fresh, and beautifully served.",
    },
    {
      name: "Tinashe R.",
      text: "Amazing service and delicious meals. Every bite felt homemade and full of care.",
    },
    {
      name: "Ava N.",
      text: "I will definitely come back again! The atmosphere and quality were absolutely worth it.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="max-w-6xl mx-auto px-6">
        <p className="page-kicker testimonials-kicker">Customer love</p>
        <h2 className="text-4xl text-center font-bold mb-12 text-white">
          What Customers Say
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={review.name} className="testimonial-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="stars" aria-label="Five star review">
                ★★★★★
              </div>
              <p className="testimonial-quote">“{review.text}”</p>
              <div className="testimonial-author">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
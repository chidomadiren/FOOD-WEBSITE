function About() {
  const highlights = [
    {
      title: "Fresh Ingredients",
      text: "We source quality ingredients daily so every dish tastes vibrant and satisfying.",
      icon: "🥬",
    },
    {
      title: "Warm Hospitality",
      text: "From quick lunch breaks to relaxed family dinners, we make every guest feel welcome.",
      icon: "🤝",
    },
    {
      title: "Signature Flavors",
      text: "Our kitchen blends comfort classics with unforgettable local-inspired twists.",
      icon: "🔥",
    },
  ];

  return (
    <section className="page-shell">
      <div className="max-w-6xl mx-auto px-6">
        <p className="page-kicker">Our story</p>
        <h1 className="section-title text-red-600">About Chichie Restaurant</h1>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
            alt="Restaurant"
            className="rounded-2xl shadow-xl about-image"
          />

          <div className="about-copy">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Where Great Food Meets Great Moments
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Chichie Restaurant is dedicated to serving delicious meals made
              from fresh, high-quality ingredients. Whether you're craving a
              juicy burger, cheesy pizza, grilled chicken, refreshing salads,
              or delightful desserts, we have something for everyone.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our experienced chefs prepare every meal with passion, ensuring
              every bite is full of flavor. We believe great food brings people
              together, and we are committed to creating memorable dining
              experiences for every guest.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="pill">Family dining</span>
              <span className="pill">Chef specials</span>
              <span className="pill">Fast service</span>
            </div>
          </div>
        </div>

        <div className="feature-grid mt-16">
          {highlights.map((item) => (
            <div key={item.title} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
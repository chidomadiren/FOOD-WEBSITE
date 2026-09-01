import MenuItems from "../../components/MenuItems";

function Menu() {
  const menuHighlights = [
    { title: "Chef Picks", text: "Top-rated plates loved by locals and visitors alike." },
    { title: "Fresh Daily", text: "Prepared with seasonal produce and premium ingredients." },
    { title: "Family Favorite", text: "Comfort meals that bring everyone to the table." },
  ];

  return (
    <section className="page-shell menu-shell">
      <div className="max-w-7xl mx-auto px-6">
        <p className="page-kicker">Menu highlights</p>
        <h1 className="section-title text-red-600">Our Menu</h1>

        <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
          Freshly prepared meals made with love and the finest ingredients.
        </p>

        <div className="menu-banner">
          <div>
            <span className="menu-badge">Popular today</span>
            <h2>Signature plates with bold, comforting flavors</h2>
          </div>
          <div className="menu-banner-stats">
            <div>
              <strong>12+</strong>
              <span>meal options</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>customer rating</span>
            </div>
          </div>
        </div>

        <div className="menu-highlight-grid">
          {menuHighlights.map((item) => (
            <div key={item.title} className="feature-card menu-feature">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <MenuItems />
        </div>
      </div>
    </section>
  );
}

export default Menu;
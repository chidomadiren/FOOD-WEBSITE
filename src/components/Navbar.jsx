import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-black-600">
          Chichie<span className="text-red-500">Restaurant</span>
        </h1>


        <div className="hidden md:flex gap-8 font-semibold">

          <Link to="/" className="hover:text-red-600">
            Home
          </Link>

          <Link to="/menu" className="hover:text-red-600">
            Menu
          </Link>

          <Link to="/about" className="hover:text-red-600">
            About
          </Link>

          <Link to="/contact" className="hover:text-red-600">
            Contact
          </Link>

        </div>




      </div>

    </nav>
  );
}

export default Navbar;
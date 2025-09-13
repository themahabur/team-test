import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Navigation Bar */}
      <nav className="bg-green-800 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">AgriGrow</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-green-200 transition">
              Home
            </a>
            <a href="#" className="hover:text-green-200 transition">
              Products
            </a>
            <a href="#" className="hover:text-green-200 transition">
              Services
            </a>
            <a href="#" className="hover:text-green-200 transition">
              About
            </a>
            <a href="#" className="hover:text-green-200 transition">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition">
              Login
            </button>
            <button className="md:hidden">☰</button>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative h-96 bg-green-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        ></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Modern Solutions for Agriculture
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Helping farmers grow more with sustainable practices and innovative
            technology
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition">
              Our Services
            </button>
            <button className="bg-white text-green-800 hover:bg-green-100 px-6 py-3 rounded-lg font-semibold transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Our Agricultural Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Crop Consulting</h3>
              <p className="text-gray-600">
                Expert advice on crop selection, rotation, and management
                practices.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-2">
                Irrigation Solutions
              </h3>
              <p className="text-gray-600">
                Efficient water management systems tailored to your farm's
                needs.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-2">Organic Farming</h3>
              <p className="text-gray-600">
                Sustainable practices for healthier crops and environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Showcase */}
      <div className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(item => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-green-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Organic Fertilizer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Natural nutrients for healthier soil and plants.
                  </p>
                  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            What Farmers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "The irrigation solutions increased our yield by 30% while
                reducing water usage significantly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-200 mr-4"></div>
                <div>
                  <p className="font-semibold">John Peterson</p>
                  <p className="text-green-600">Dairy Farmer</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "Their organic farming consultation transformed our practices
                and improved our soil health dramatically."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-200 mr-4"></div>
                <div>
                  <p className="font-semibold">Maria Rodriguez</p>
                  <p className="text-green-600">Organic Grower</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with AgriGrow
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tips, products, and
            agricultural innovations.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded text-gray-800 w-full md:w-96"
            />
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AgriGrow</h3>
            <p className="text-green-200">
              Sustainable agricultural solutions for the modern farmer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  Crop Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  Irrigation Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  Organic Farming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition"
                >
                  Soil Testing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-green-200">
              <p>123 Farm Road</p>
              <p>Agricultural City, AC 12345</p>
              <p className="mt-2">info@agrigrow.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>© 2023 AgriGrow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;

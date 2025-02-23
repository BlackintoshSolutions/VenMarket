import React from 'react';
import { Outlet } from 'react-router-dom';
import { Store, ShoppingBag, MessageCircle, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">VenMarket</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/stores" className="text-gray-600 hover:text-gray-900">
                Tiendas
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900">
                Productos
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
                Precios
              </Link>
              <Link to="/register" className="text-gray-600 hover:text-gray-900">
                Registrarse
              </Link>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Conectar Billetera
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/stores"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tiendas
                </Link>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Precios
                </Link>
                <Link
                  to="/register"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registrarse
                </Link>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Conectar Billetera
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 md:hidden z-50">
        <div className="grid grid-cols-4 gap-1">
          <Link to="/" className="flex flex-col items-center py-3">
            <Store className="h-6 w-6" />
            <span className="text-xs mt-1">Tiendas</span>
          </Link>
          <Link to="/products" className="flex flex-col items-center py-3">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs mt-1">Productos</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center py-3">
            <MessageCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center py-3">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>
      </nav>

      <Footer />
    </div>
  );
};

export default Layout;
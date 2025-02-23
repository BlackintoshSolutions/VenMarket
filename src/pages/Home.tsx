import React from 'react';
import { Store as StoreIcon, TrendingUp, Wallet, MessageCircle } from 'lucide-react';

const features = [
  {
    name: 'Crea Tu Tienda',
    description: 'Configura tu tienda digital en minutos y comienza a vender productos.',
    icon: StoreIcon,
  },
  {
    name: 'Múltiples Métodos de Pago',
    description: 'Acepta pagos en crypto y pagos móviles venezolanos sin complicaciones.',
    icon: Wallet,
  },
  {
    name: 'Servicio al Cliente Automatizado',
    description: 'Soporte con chatbot 24/7 para tus clientes.',
    icon: MessageCircle,
  },
  {
    name: 'Analíticas en Tiempo Real',
    description: 'Monitorea tus ventas y el comportamiento de tus clientes con analíticas detalladas.',
    icon: TrendingUp,
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Tu Tienda Digital
          <span className="text-indigo-600"> Simplificada</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Crea tu tienda de WhatsApp/Telegram en minutos. Acepta múltiples métodos de pago y automatiza tu servicio al cliente.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Crear Tienda
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div>
                <feature.icon className="h-12 w-12 text-indigo-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Stores Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tiendas Destacadas</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((store) => (
            <div key={store} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/800x600?store&${store}`}
                alt="Tienda"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Tienda {store}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Una hermosa tienda con productos increíbles y excelente servicio al cliente.
                </p>
                <button className="mt-4 w-full bg-indigo-50 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-100 transition-colors">
                  Visitar Tienda
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
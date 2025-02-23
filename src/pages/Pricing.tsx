import React from 'react';
import { Check, AlertCircle, ChevronRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Plan Básico',
      price: 10,
      description: 'Perfecto para comenzar',
      features: [
        '1 tienda',
        'Límite de 100 productos',
        'Soporte chatbot 24/7',
        'Panel de control básico',
        'Integración WhatsApp',
        'Pagos en crypto'
      ],
      cta: 'Comenzar Prueba Gratuita',
      popular: false,
      savings: 'Ahorra 20% con pago anual',
      color: 'indigo'
    },
    {
      name: 'Plan Premium',
      price: 50,
      description: 'Para negocios en crecimiento',
      features: [
        '5 tiendas',
        'Productos ilimitados',
        'Soporte prioritario',
        'Panel de control avanzado',
        'Integración WhatsApp y Telegram',
        'Todos los métodos de pago',
        'Analíticas avanzadas',
        'API básica'
      ],
      cta: 'Contratar Ahora',
      popular: true,
      savings: 'Ahorra 25% con pago anual',
      color: 'indigo'
    },
    {
      name: 'Plan Empresarial',
      price: 100,
      description: 'Solución completa para empresas',
      features: [
        'White-label',
        'API personalizada',
        'KYC avanzado',
        'Tiendas ilimitadas',
        'Soporte dedicado 24/7',
        'Panel personalizado',
        'Integraciones personalizadas',
        'SLA garantizado'
      ],
      cta: 'Contactar Ventas',
      popular: false,
      color: 'gold'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Planes y Precios
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Elige el plan perfecto para tu negocio
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border ${
                plan.popular
                  ? 'border-indigo-600 shadow-xl'
                  : plan.color === 'gold'
                  ? 'border-yellow-500 shadow-xl'
                  : 'border-gray-200'
              } p-8 ${plan.popular ? 'bg-white ring-2 ring-indigo-600' : 'bg-white'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium text-white">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/mes</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                {plan.savings && (
                  <div className="mt-4 flex items-center text-green-600">
                    <Check className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">{plan.savings}</span>
                  </div>
                )}

                <ul role="list" className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 block w-full rounded-md py-3 px-6 text-center text-sm font-semibold leading-6 ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : plan.color === 'gold'
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.popular ? 'focus:ring-indigo-600' : 'focus:ring-indigo-500'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Preguntas Frecuentes
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Puedo cambiar de plan en cualquier momento?
              </h4>
              <p className="mt-2 text-gray-600">
                Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Qué métodos de pago aceptan?
              </h4>
              <p className="mt-2 text-gray-600">
                Aceptamos tarjetas de crédito, PayPal, transferencias bancarias y criptomonedas (BTC, ETH, USDT).
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Ofrecen soporte en español?
              </h4>
              <p className="mt-2 text-gray-600">
                Sí, nuestro equipo de soporte está disponible 24/7 en español para ayudarte con cualquier consulta.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Necesito conocimientos técnicos?
              </h4>
              <p className="mt-2 text-gray-600">
                No, nuestra plataforma está diseñada para ser fácil de usar. Además, ofrecemos guías detalladas y soporte personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
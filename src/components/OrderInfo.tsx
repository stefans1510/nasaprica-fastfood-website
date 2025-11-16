import React from 'react';
import { Phone, MapPin, Car } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const OrderInfo = () => {
  return (
    <div id="porucivanje" className="bg-muted py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Kako naručiti
          </h2>
          <p className="text-muted-foreground text-lg">
            Naručite vašu omiljenu hranu brzo i jednostavno
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pozovite nas</h3>
              <a
                href={`tel:+381606896000`}
                className="text-2xl font-bold text-primary hover:underline"
              >
                060/68-96-000
              </a>
            </div>

            {/* Pickup */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Preuzimanje</h3>
              <p className="text-gray-600">Bez dodatne naplate</p>
              <p className="text-sm text-gray-500 mt-2">Priprema: 15-20 min</p>
            </div>

            {/* Delivery */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dostava</h3>
              <p className="text-gray-600">Dodatno: <span className='text-primary'>200 RSD</span></p>
              <p className="text-sm text-gray-500 mt-2">Vreme dostave: 30-45 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
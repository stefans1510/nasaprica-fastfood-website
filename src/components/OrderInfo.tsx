import React from 'react';
import { Phone, MapPin, Truck } from 'lucide-react';
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phone Order */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-primary">
                <Phone size={28} />
                Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground mb-4">
                +387 33 123 456
              </p>
              <p className="text-muted-foreground mb-6">
                Pozovite nas i naručite direktno preko telefona
              </p>
              <Button 
                className="w-full"
                onClick={() => window.open('tel:+38733123456')}
              >
                Pozovi sada
              </Button>
            </CardContent>
          </Card>

          {/* Delivery Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-primary">
                Načini preuzimanja
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <MapPin className="text-primary" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">Preuzimanje</h4>
                  <p className="text-sm text-muted-foreground">
                    Dođite po hranu u naš restoran
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <Truck className="text-primary" size={24} />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Dostava</h4>
                  <p className="text-sm text-muted-foreground">
                    Dostavljamo na kućnu adresu
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-primary">
                    + 3,00 KM
                  </span>
                  <p className="text-xs text-muted-foreground">
                    troškovi dostave
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Radno vrijeme
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="font-medium">Ponedjeljak - Petak</p>
                <p>11:00 - 23:00</p>
              </div>
              <div>
                <p className="font-medium">Subota - Nedjelja</p>
                <p>12:00 - 24:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;